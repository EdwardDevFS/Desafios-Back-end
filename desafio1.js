class Product{

    constructor(){
        this.products = []
    }



    addItems(title, description, price, thumbnail, stock){
        if(title === undefined || description === undefined || price === undefined || thumbnail === undefined || stock === undefined){
            console.log("************************************     ERROR AL AÑADIR     *****************************************\n")
            console.log("Al parecer falta alguna característica y no se agrego al carrito")
            console.log("\n************************************     CIERRE DE ERROR     *****************************************\n\n")
        }
        else{
            let productos_a_Agregar={
                title: title,
                description:description,
                price:price,
                thumbnail:thumbnail,
                stock: stock,
            }
            
            if(this.products.length===0){
                productos_a_Agregar.code=1;
            }else{
                productos_a_Agregar.code=this.products.length+1;
            }
            this.products.push(productos_a_Agregar);
        }


    }

    getItemsById(code){
        let item = this.products.find(index=>index.code===code);
        if(item === undefined){
            console.log(`El identificador ${code} no existe en el sistema`);
            return
        }
        console.log(item)
    }

    getProducts(){
        console.log("************************************     PRODUCTOS     *****************************************\n")
        console.log(productos.products)
        console.log("\n************************************     CIERRE DE ARRAY PRODUCTOS     *****************************************\n")

    }
}
let productos  = new Product()
// "**********************     AGREGAR ITEM A PRODUCTS     **********************"
productos.addItems("tijeras", "corta y corta sin parar", "url...", 40)
productos.addItems("Linterna", "sirve para alumbrar jeje", 80, "url...", 20)
productos.addItems("Escoba", "sirve para limpiar xd", 20, "url...", 50)


console.log("************************************     BUSCAR POR ID     *****************************************\n")

productos.getItemsById(1)
productos.getItemsById(5)

console.log("\n************************************     CIERRE DE BUSCAR POR ID     *****************************************\n\n")

productos.getProducts()
