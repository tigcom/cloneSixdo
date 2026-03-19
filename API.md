# API Documentation

## Base URL
```
http://localhost:8080/api
```

## Authentication
Ứng dụng sử dụng Spring Security. Các endpoint được bảo vệ yêu cầu authentication.

## Endpoints

### 🏷️ Categories

#### GET /api/categories
Lấy danh sách tất cả categories

**Response:**
```json
[
  {
    "id": 1,
    "name": "Electronics",
    "description": "Electronic devices and accessories"
  }
]
```

#### GET /api/categories/{id}
Lấy thông tin category theo ID

**Parameters:**
- `id` (path): Category ID

**Response:**
```json
{
  "id": 1,
  "name": "Electronics",
  "description": "Electronic devices and accessories"
}
```

#### POST /api/categories
Tạo category mới

**Request Body:**
```json
{
  "name": "New Category",
  "description": "Category description"
}
```

**Response:**
```json
{
  "id": 2,
  "name": "New Category",
  "description": "Category description"
}
```

#### PUT /api/categories/{id}
Cập nhật category

**Parameters:**
- `id` (path): Category ID

**Request Body:**
```json
{
  "name": "Updated Category",
  "description": "Updated description"
}
```

#### DELETE /api/categories/{id}
Xóa category

**Parameters:**
- `id` (path): Category ID

### 📦 Products

#### GET /api/products
Lấy danh sách sản phẩm với phân trang

**Query Parameters:**
- `page` (optional): Số trang (default: 0)
- `size` (optional): Kích thước trang (default: 20)
- `sort` (optional): Sắp xếp (e.g., "name,asc")

**Response:**
```json
{
  "content": [
    {
      "id": 1,
      "name": "iPhone 15",
      "description": "Latest iPhone model",
      "price": 999.99,
      "stock": 50,
      "category": {
        "id": 1,
        "name": "Electronics"
      }
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 20
  },
  "totalElements": 1,
  "totalPages": 1
}
```

#### GET /api/products/{id}
Lấy thông tin sản phẩm theo ID

**Parameters:**
- `id` (path): Product ID

**Response:**
```json
{
  "id": 1,
  "name": "iPhone 15",
  "description": "Latest iPhone model",
  "price": 999.99,
  "stock": 50,
  "category": {
    "id": 1,
    "name": "Electronics"
  }
}
```

#### POST /api/products
Tạo sản phẩm mới

**Request Body:**
```json
{
  "name": "New Product",
  "description": "Product description",
  "price": 299.99,
  "stock": 100,
  "categoryId": 1
}
```

#### PUT /api/products/{id}
Cập nhật sản phẩm

**Parameters:**
- `id` (path): Product ID

**Request Body:**
```json
{
  "name": "Updated Product",
  "description": "Updated description",
  "price": 349.99,
  "stock": 80,
  "categoryId": 1
}
```

#### DELETE /api/products/{id}
Xóa sản phẩm

**Parameters:**
- `id` (path): Product ID

#### GET /api/products/category/{categoryId}
Lấy sản phẩm theo category

**Parameters:**
- `categoryId` (path): Category ID
- `page` (optional): Số trang
- `size` (optional): Kích thước trang

#### GET /api/products/search
Tìm kiếm sản phẩm

**Query Parameters:**
- `q`: Từ khóa tìm kiếm
- `page` (optional): Số trang
- `size` (optional): Kích thước trang

## Error Responses

### 400 Bad Request
```json
{
  "timestamp": "2024-01-01T10:00:00.000+00:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "path": "/api/products"
}
```

### 404 Not Found
```json
{
  "timestamp": "2024-01-01T10:00:00.000+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "Product not found with id: 999",
  "path": "/api/products/999"
}
```

### 500 Internal Server Error
```json
{
  "timestamp": "2024-01-01T10:00:00.000+00:00",
  "status": 500,
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "path": "/api/products"
}
```

## Status Codes

- `200 OK`: Request thành công
- `201 Created`: Resource được tạo thành công
- `204 No Content`: Request thành công, không có content trả về
- `400 Bad Request`: Request không hợp lệ
- `401 Unauthorized`: Chưa xác thực
- `403 Forbidden`: Không có quyền truy cập
- `404 Not Found`: Resource không tồn tại
- `500 Internal Server Error`: Lỗi server

## Rate Limiting

API hiện tại chưa có rate limiting. Sẽ được thêm trong phiên bản tương lai.

## Versioning

API hiện tại là version 1. Các version tương lai sẽ sử dụng URL path versioning:
- `/api/v1/products`
- `/api/v2/products`