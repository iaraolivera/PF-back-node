import { db } from "../data/data.js"
import { doc, getDoc, getDocs, collection, addDoc, deleteDoc } from "firebase/firestore"

//obtener producto

export function obtenerProducto(id) {
    return new Promise(async (res, rej) => {
        try {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data: ", docSnap.data());
                res(docSnap.data())
            } else {
                console.log(`No such document!`);
                res()
            }
        } catch (error) {
            console.log(error)
            rej(error)
        }
    })

}



//obtener todos los productos
export function obtenerProductos() {
    return (
        new Promise(async (res, rej) => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
          
                const productos = []

                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    productos.push({ ...doc.data(), id: doc.id })
                });

                //console.log(productos)
                res(productos)

            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )
    // const querySnapshot = await getDocs(collection(db, "products"))
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, "=>", doc.data())
    // })
}




//agregar producto
export function agregarProducto(producto) {
    return (
        new Promise(async (res, rej) => {
            try {
                const docRef = await addDoc(collection(db, "products"), producto);
                console.log("Doc ID: ", docRef.id)
                res({ ...producto, id: docRef.id })

            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )


}



//actualizar producto
// export function actualizarProducto(id, producto) {
//     return (
//         new Promise(async (res, rej) => {
//             try {
//                 await updateDoc(doc(db, "products", id), {
//                     ...producto
//                 })
//                 console.log("producto actualizado")
//                 res({})
//             } catch (error) {
//                 console.log(error)
//                 rej(error)
//             }
//         })
//     )

// }


//eliminar producto
export function eliminarProducto(id) {
    return (
        new Promise(async (res, rej) => {
            try {
                await deleteDoc(doc(db, "products", id));
                console.log("producto eliminado")
                res()
            } catch (error) {
                console.log(error)
                rej(error)
            }
        })
    )

}

