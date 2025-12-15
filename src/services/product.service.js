
import { obtenerProducto, obtenerProductos, agregarProducto, eliminarProducto } from "../models/products.models.js"

export const addProductsServices = async (product) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const newProduct = await agregarProducto(product)
                res(newProduct)
            } catch (error) {
                rej(error)
            }
        })
    )

}

export const getAllProductsServices = async () => {
    return (
        new Promise(async (res, rej) => {
            console.log("prueba de servicio de todos los productos")

            try {
                const productos = await obtenerProductos()
                res(productos)
            } catch (error) {
                console.log(error)
                rej()
            }
        })
    )
};

export const getProductByIdServices = async (id) => {
    return (
        new Promise(async (res, rej) => {
            try {
                const product = await obtenerProducto(id);
                res(product)
            } catch (error) {
                rej(error)
            }
        })
    )

};


export const deleteProductServices = (id) => {
    console.log("id servicio", id)
    return (
        new Promise(async (res, rej) => {
            try {
                await eliminarProducto(id)
                console.log("se elimino")
                res()
            } catch (error) {
                rej(error)
            }
        })
    )
}

// export const editProductService = (id, producto) => {
//     return (
//         new Promise(async (res, rej) => {
//             try {
//                 const productoActualizado = await actualizarProducto(id, producto)
//                 res(productoActualizado)
//             } catch (error) {
//                 rej(error)
//             }

//         }))



// }