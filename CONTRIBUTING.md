# Hướng dẫn đóng góp

Cảm ơn bạn quan tâm đến việc đóng góp cho dự án Sixdo E-commerce Platform!

## 🤝 Cách đóng góp

### 1. Fork và Clone
```bash
# Fork repository trên GitHub
# Clone fork của bạn
git clone https://github.com/your-username/sixdo-ecommerce.git
cd sixdo-ecommerce
```

### 2. Tạo branch mới
```bash
git checkout -b feature/ten-tinh-nang-moi
# hoặc
git checkout -b fix/ten-bug-can-sua
```

### 3. Coding Standards

#### Backend (Java)
- Sử dụng Java naming conventions
- Viết Javadoc cho public methods
- Unit tests cho business logic
- Sử dụng Spring Boot best practices

#### Frontend (JavaScript/React)
- Sử dụng ESLint và Prettier
- Component names sử dụng PascalCase
- File names sử dụng kebab-case
- Viết JSDoc cho complex functions

### 4. Commit Messages
Sử dụng format:
```
type(scope): description

feat(product): thêm chức năng tìm kiếm sản phẩm
fix(auth): sửa lỗi đăng nhập
docs(readme): cập nhật hướng dẫn cài đặt
```

Types:
- `feat`: Tính năng mới
- `fix`: Sửa bug
- `docs`: Cập nhật documentation
- `style`: Thay đổi formatting
- `refactor`: Refactor code
- `test`: Thêm/sửa tests

### 5. Testing
```bash
# Backend tests
cd backend && ./mvnw test

# Frontend tests (nếu có)
cd frontend && npm test
```

### 6. Pull Request
1. Push branch lên fork của bạn
2. Tạo Pull Request từ GitHub
3. Mô tả chi tiết thay đổi
4. Link đến issue liên quan (nếu có)

## 📝 Pull Request Template

```markdown
## Mô tả
Mô tả ngắn gọn về thay đổi

## Loại thay đổi
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality

## Screenshots (nếu có)
```

## 🐛 Báo cáo Bug

Sử dụng GitHub Issues với template:

```markdown
**Mô tả bug**
Mô tả rõ ràng và ngắn gọn về bug

**Các bước tái tạo**
1. Vào '...'
2. Click vào '....'
3. Scroll xuống '....'
4. Thấy lỗi

**Kết quả mong đợi**
Mô tả kết quả bạn mong đợi

**Screenshots**
Nếu có, thêm screenshots

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.0.0]
```

## 💡 Đề xuất tính năng

```markdown
**Mô tả tính năng**
Mô tả rõ ràng về tính năng đề xuất

**Lý do**
Tại sao tính năng này hữu ích?

**Giải pháp đề xuất**
Mô tả cách bạn muốn tính năng hoạt động

**Alternatives**
Các giải pháp thay thế khác bạn đã xem xét
```

## 📋 Development Workflow

1. **Issue First**: Tạo hoặc comment vào issue trước khi bắt đầu code
2. **Small PRs**: Giữ PR nhỏ và tập trung vào một vấn đề
3. **Code Review**: Tất cả PR cần được review trước khi merge
4. **CI/CD**: Đảm bảo tất cả checks pass

## 🎯 Priorities

### High Priority
- Security fixes
- Performance improvements
- Critical bugs

### Medium Priority
- New features
- UI/UX improvements
- Documentation

### Low Priority
- Code refactoring
- Minor enhancements

## 📞 Liên hệ

- GitHub Issues: Cho bugs và feature requests
- Discussions: Cho câu hỏi và thảo luận

Cảm ơn bạn đã đóng góp! 🎉