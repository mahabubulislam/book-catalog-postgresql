### Live Link: https://book-catalog-postgresql.vercel.app

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/d32adce8-d564-496b-a520-feea41ef4ea8 (Single GET) Include an id that is saved in your database
- api/v1/users/d32adce8-d564-496b-a520-feea41ef4ea8 (PATCH)
- api/v1/users/d32adce8-d564-496b-a520-feea41ef4ea8 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/3207e9a4-94ea-41a7-a250-8b9c25ccce6a (Single GET) Include an id that is saved in your database
- api/v1/categories/3207e9a4-94ea-41a7-a250-8b9c25ccce6a (PATCH)
- api/v1/categories/3207e9a4-94ea-41a7-a250-8b9c25ccce6a (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
