import * as productService from "../services/product.service.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProductsServices();
        console.log(`productos desde el controlador ${products}`)
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error)
    }

};

export const getProductById = async (req, res) => {

    try {
        const id = req.params.id;
        console.log("este es el", id)
        if (id) {
            const product = await productService.getProductByIdServices(id);

            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } else {
            res.status(400).json(error)
        }

    } catch (error) {
        res.status(500).send().send()
    }
};

export const addProducts = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productService.addProductsServices(product)
        res.status(200).json(newProduct)

    } catch (error) {
        res.status(500).send()
    }
}



export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`El id es ${id}`)
        if (id) {
            await productService.deleteProductServices(id);
            console.log(`se borro`)
            res.sendStatus(200)
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).send()
    }

}
// export const editProduct = async (req, res) => {
//     try {
//         const id = req.params.id
//         const product = req.body
//         console.log("PARAMS:", req.params);
//         console.log("BODY:", req.body);
//         if (id && product) {
//             const newProduct = await productService.editProductService(id, product)
//             res.status(200).json(newProduct);
//         } else {
//             res.status(400).json({ message: "ID o body inválido" })
//         }
//     } catch (error) {
//         res.status(500).send()
//     }
// }