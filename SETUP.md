# Hướng dẫn cài đặt môi trường phát triển

## 📋 Yêu cầu hệ thống

### Backend Requirements
- **Java**: JDK 17 hoặc cao hơn
- **Maven**: 3.6+ (hoặc sử dụng Maven wrapper đi kèm)
- **Database**: PostgreSQL 12+

### Frontend Requirements
- **Node.js**: 18.0+ 
- **npm**: 8.0+ (hoặc yarn/pnpm)

## 🗄️ Cài đặt Database

### PostgreSQL Setup

1. **Cài đặt PostgreSQL**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   
   # macOS với Homebrew
   brew install postgresql
   
   # Windows: Tải từ https://www.postgresql.org/download/windows/
   ```

2. **Tạo database và user**
   ```sql
   -- Kết nối với PostgreSQL
   sudo -u postgres psql
   
   -- Tạo database
   CREATE DATABASE sixdo_db;
   
   -- Tạo user
   CREATE USER sixdo_user WITH PASSWORD 'your_password';
   
   -- Cấp quyền
   GRANT ALL PRIVILEGES ON DATABASE sixdo_db TO sixdo_user;
   ```

## ⚙️ Cấu hình Backend

1. **Cấu hình database**
   
   Tạo file `backend/src/main/resources/application-local.properties`:
   ```properties
   # Database Configuration
   spring.datasource.url=jdbc:postgresql://localhost:5432/sixdo_db
   spring.datasource.username=sixdo_user
   spring.datasource.password=your_password
   
   # JPA Configuration
   spring.jpa.hibernate.ddl-auto=validate
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.format_sql=true
   
   # Flyway Configuration
   spring.flyway.enabled=true
   spring.flyway.locations=classpath:db/migration
   ```

2. **Chạy với profile local**
   ```bash
   cd backend
   ./mvnw spring-boot:run -Dspring-boot.run.profiles=local
   ```

## 🎨 Cấu hình Frontend

1. **Cài đặt dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Tạo file environment**
   
   Tạo file `frontend/.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080/api
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   ```

## 🔧 Development Tools

### IDE Recommendations

**Backend (Java)**
- IntelliJ IDEA
- Eclipse
- VS Code với Java Extension Pack

**Frontend (JavaScript/React)**
- VS Code
- WebStorm

### Useful Extensions/Plugins

**VS Code Extensions:**
- Java Extension Pack
- Spring Boot Extension Pack
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint

## 🧪 Testing

### Backend Tests
```bash
cd backend
./mvnw test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📦 Build Production

### Backend
```bash
cd backend
./mvnw clean package
```

### Frontend
```bash
cd frontend
npm run build
```

## 🐛 Troubleshooting

### Common Issues

1. **Port đã được sử dụng**
   - Backend: Thay đổi port trong `application.properties`
   - Frontend: Sử dụng `npm run dev -- -p 3001`

2. **Database connection failed**
   - Kiểm tra PostgreSQL service đang chạy
   - Xác nhận thông tin kết nối trong config

3. **Maven build failed**
   - Kiểm tra Java version: `java -version`
   - Clear Maven cache: `./mvnw clean`

### Logs Location
- Backend logs: Console output hoặc `backend/logs/`
- Frontend logs: Browser console

## 🔄 Database Migration

Flyway sẽ tự động chạy migrations khi khởi động ứng dụng. Để chạy thủ công:

```bash
cd backend
./mvnw flyway:migrate
```

## 📞 Hỗ trợ

Nếu gặp vấn đề trong quá trình setup, vui lòng tạo issue trên repository hoặc liên hệ team phát triển.