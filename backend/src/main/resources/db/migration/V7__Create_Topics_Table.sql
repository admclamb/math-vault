CREATE TABLE topics (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    placement INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,
    version INT DEFAULT 0 NOT NULL
);