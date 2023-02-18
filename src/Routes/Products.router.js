const Router = require('express').Router;
const {v4: uuidv4} =  require('uuid');
const router = Router()

const products = []



router.get('/:id',(req,res)=>{
    let id = req.params.id;
    let producto = products.find(e=>e.code == id);
    if(producto){
        res.json(producto)
    }else{
        res.send(`No existe el producto con el ID ${id}`)
    }
});

router.get("/", (req, res)=>{
    let limit= req.query.limit;
    if(limit){
        let result = []  
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            if(i < limit){
                result.push(element)
            }
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({result})
    }else{
        res.status(200).json({
            products
        })
    }
})

router.post("/",(req,res)=>{
    console.log(req.body)

    let product = req.body;
    if(!product.title && !product.description && !product.price && product.stock && !product.category){
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            message: `Al parecer falta alguno de estos parametros: title, description, price, stock, category`,
        })    
    }
    product.status = true
    product.code = uuidv4();
    products.push(product);
    // TODO FALTA VALIDACION
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({
        message: `Todo OK...`,
        products 
    })
})
router.put("/:id",(req,res)=>{
    let id = req.params.id
    let product = req.body
    let index = products.findIndex((index)=> index.code === id)
    if(index == -1){
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            message: `No se encontró el producto con el id ${id}`,
        })    
    }
    
    products.splice(index,1)
    product.code = id
    product.status = true
    products.push(product)
    
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({
        message: `Todo OK...`,
        products 
    })
})
router.delete("/:id",(req,res)=>{
    let id = req.params.id
    let index =  products.findIndex((index)=> index.code == id)
    if(index == -1){
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            message: `No se encontró el producto con el id ${id}`,
        })    
    }
    let nombreProducto = products.find((index)=>index.code == id).title
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({
        message: `Se eliminó correctamente el producto ${nombreProducto} con el id ${id}`,
    })
    products.splice(index,1)
    
})



module.exports=router