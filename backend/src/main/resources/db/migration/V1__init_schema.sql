CREATE TABLE categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    old_price DECIMAL(10,2),
    description TEXT,
    category_id BIGINT,
    CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255)
);

CREATE TABLE user_roles (
    user_id BIGINT NOT NULL,
    roles VARCHAR(255),
    CONSTRAINT fk_user_roles FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    order_date DATETIME,
    total_amount DECIMAL(10,2),
    status VARCHAR(50),
    CONSTRAINT fk_order_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT,
    product_id BIGINT,
    quantity INT,
    price DECIMAL(10,2),
    CONSTRAINT fk_orderitem_order FOREIGN KEY (order_id) REFERENCES orders(id),
    CONSTRAINT fk_orderitem_product FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Dump init data
INSERT INTO categories (name) VALUES ('SẢN PHẨM MỚI'), ('SẢN PHẨM GIẢM GIÁ'), ('ĐỒNG PHỤC'), ('PHỤ KIỆN'), ('TÚI XÁCH'), ('BỘ SƯU TẬP');

INSERT INTO products (name, image, price, old_price, description, category_id) VALUES 
('White Raw Blouse', 'https://sixdo.vn/images/products/2026/large/DU__9941.jpg', 1037000, 1296000, '', 1),
('Black Woven Flared Skirt', 'https://sixdo.vn/images/products/2026/large/_1771918150DU__9813 copy_1.jpg', 1357000, 1696000, '', 1),
('Black Ruffle Sleeves Cotton Tshirt', 'https://sixdo.vn/images/products/2026/large/_1771913502DU__9756_1.jpg', 797000, 996000, '', 1),
('Black Woven Baggy Pants', 'https://sixdo.vn/images/products/2026/large/DU__9660.jpg', 1117000, 1396000, '', 1);
