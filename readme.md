🚀 API REST – Servidor de Productos

API REST desarrollada con Node.js + Express, que permite manejar autenticación con JWT y un CRUD de productos.
Incluye configuración de CORS, middlewares personalizados y estructura por capas.

🛠️ **Tecnologías usadas**

🟢 Node.js

⚡ Express

🔐 jsonwebtoken

🌍 CORS

📦 dotenv

🧪 Postman (testing)

📁 **Estructura del proyecto**

├── public/
│   └── index.html
├── src/
│   ├── controllers/
|   └── data/
│   ├── routes/
│   ├── services/
│   └── middleware/
|   └── models/
├── .env
├── index.js
└── package.json

▶️ **Cómo ejecutar el proyecto**

npm install
npm start


📌 **Rutas de la API**
🔑 Auth

Método	 Ruta	     Descripción
POST	/api/login	Inicia sesión y devuelve token


📦 **Productos**
| Método | Ruta                  | Protegida | Descripción                 |
| ------ | ----------------------| --------- | --------------------------- |
| GET    | `/api/products`       | sin auth  | Obtener todos los productos |
| GET    | `/api/products/:id`   | sin auth  | Obtener producto por ID     |
| POST   | `/api/products/create`| 🔐        | Crear un producto           |
| DELETE | `/api/products/:id`   | 🔐        | Eliminar un producto        |


