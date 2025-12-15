import express from "express"
import {getAllProducts, getProductById, addProducts, deleteProduct } from "../controllers/products.controllers.js"
import {authentication} from "../middleware/authentication.js"
const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create",authentication, addProducts)

routes.delete("/products/:id",authentication, deleteProduct)



export default routes;