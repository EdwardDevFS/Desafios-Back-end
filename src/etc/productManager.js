class Product{

    constructor(){
        this.products = []
    }
    // **************************** CREACION DE ITEM ***********************************
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
    // **************************** ACTUALIZAR DE ITEM ***********************************
    updateProduct(code, campo, valor_a_Agregar){
        try{
            switch(campo){
                case 'title':
                    let obtenerCode_title = this.products.find((index)=>index.code == code)
                    let anterior_title = obtenerCode_title.title 
                    obtenerCode_title.title = valor_a_Agregar
                    console.log(`Se cambió el valor "${anterior_title}" por el valor "${valor_a_Agregar}" en el campo "${campo}"` );
                    console.log(this.products);
                    break
                case 'description':
                    let obtenerCode_description = this.products.find((index)=>index.code == code)
                    let anterior_desc = obtenerCode_description.description 
                    obtenerCode_description.description = valor_a_Agregar
                    console.log(`Se cambió el valor "${anterior_desc}" por el valor "${valor_a_Agregar}" en el campo "${campo}"` );
                    console.log(this.products);
                    break
                case 'price':
                    let obtenerCode_price = this.products.find((index)=>index.code == code)
                    let anterior_price = asd.obtenerCode_price.price  
                    obtenerCode_price.price = valor_a_Agregar
                    console.log(`Se cambió el valor "${anterior_price}" por el valor "${valor_a_Agregar}" en el campo "${campo}"` );
                    console.log(this.products);
                    break
                case 'thumbnail': 
                    let obtenerCode_thumb = this.products.find((index)=>index.code == code)
                    let anterior_thumb = obtenerCode_thumb.thumbnail  
                    obtenerCode_thumb.thumbnail = valor_a_Agregar
                    console.log(`Se cambió el valor "${anterior_thumb}" por el valor "${valor_a_Agregar}" en el campo "${campo}"` );
                    console.log(this.products);
                    break
                case 'stock': 
                    let obtenerCode_stock = this.products.find((index)=>index.code == code)
                    let anterior_stock = obtenerCode_stock.stock  
                    obtenerCode_stock.stock = valor_a_Agregar
                    console.log(`Se cambió el valor "${anterior_stock}" por el valor "${valor_a_Agregar}" en el campo "${campo}"` );
                    console.log(this.products);
                    break
                default:
                    console.log("Al parecer faltó el campo a actualizar")
            }
        }catch(e){
            console.log("Al parecer no se ha encontrado el item a actualizar")
        }
    }

    // **************************** VISUALIZAR ITEMS ***********************************
    getProducts(){
        if(this.products.length == 0){
            console.log("Aún no hay items en el carrito")
        }else{
            console.log(productos.products)
        }

    }
    // **************************** BORRAR 1 ITEM ***********************************
    deleteItems(id){
        try{
            let asd = this.products.find((index)=> index.code == id)
            let num = this.products.indexOf(asd)
            this.products.splice(num,1)
            this.products.forEach((index)=>{
                if(asd.code < index.code){
                    index.code = index.code - 1
                }
    
            })
            console.log(this.products)
        }
        catch(e){
            console.log("No se encuentró ningún item con el id ",id)
        }
    }


    // **************************** VISUALIZAR 1 ITEM ***********************************

    getItemsById(code){
        let item = this.products.find(index=>index.code===code);
        if(item === undefined){
            console.log(`El identificador ${code} no existe en el sistema`);
            return
        }
        console.log(item)
    }
}
let productos  = new Product()


"**********************     CREAR ITEM     **********************"
// productos.addItems("Linterna", "sirve para alumbrar jeje", 8, "url...", 20)
// productos.addItems("tijeras", "corta y corta sin parar", 50, "url...", 40)
// productos.addItems("Escoba", "sirve para limpiar xd", 20, "url...", 50)
"**********************     ACTUALIZAR ITEM A PRODUCTS     **********************"
// productos.updateProduct(1,"title","asd")
"************************************     BUSCAR POR ID     *****************************************"
// productos.getItemsById(1)
"************************************    VISUALIZAR ITEMS     *****************************************"
// productos.getProducts()
"************************************    BORRAR ITEM POR ID     *****************************************"
// productos.deleteItems(2)
// productos.deleteItems(4)