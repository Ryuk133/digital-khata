CREATE TABLE categories(
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(50) NOT NULL UNIQUE
);

CRATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(catrgory_name)
);