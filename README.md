# Sixdo E-commerce Platform

Một nền tảng thương mại điện tử được xây dựng với Spring Boot backend và Next.js frontend.

## 🏗️ Kiến trúc

- **Backend**: Spring Boot với Java
- **Frontend**: Next.js với React
- **Database**: PostgreSQL (với Flyway migration)
- **Security**: Spring Security

## 📁 Cấu trúc dự án

```
├── backend/          # Spring Boot API
│   ├── src/main/java/com/sixdo/backend/
│   │   ├── config/   # Cấu hình bảo mật
│   │   ├── controller/ # REST Controllers
│   │   ├── model/    # JPA Entities
│   │   ├── repository/ # Data repositories
│   │   └── service/  # Business logic
│   └── src/main/resources/
│       └── db/migration/ # Database migrations
└── frontend/         # Next.js application
    ├── app/         # App router pages
    └── public/      # Static assets
```

## 🚀 Bắt đầu nhanh

### Yêu cầu hệ thống

- Java 17+
- Node.js 18+
- PostgreSQL
- Maven

### Cài đặt và chạy

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd sixdo-ecommerce
   ```

2. **Chạy Backend**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

3. **Chạy Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 📚 API Documentation

Backend API chạy trên `http://localhost:8080`

### Endpoints chính:
- `/api/products` - Quản lý sản phẩm
- `/api/categories` - Quản lý danh mục

## 🛠️ Phát triển

Xem [SETUP.md](./SETUP.md) để biết hướng dẫn chi tiết về cài đặt môi trường phát triển.

## 📄 License

MIT License