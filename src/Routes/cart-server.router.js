const Router = require('express').Router;
const router = Router()
const carrito = require('./Products.router').products

const carts = []

router.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(
        {
            message: 'sucess',
            carts
        }
    )
})
router.get('/:cid',(req,res)=>{
    let cid = req.params.cid;
    let carrito = carts.find(e=>e.id == cid);
    if(carrito){
        res.json(carrito)
    }else{
        res.send(`No existe el carrito con el ID ${id}`)
    }
});
router.post('/:cid/product/:id',(req,res)=>{
    let cid = req.params.cid;
    let idP = req.params.id;
    let cart = req.body;
    let Exists = carts.findIndex((index)=> index.id == cid)
    console.log(Exists)
    if(Exists == -1){
        cart.quantity = 1
        let productoFind = carrito.find((index)=> index.code == idP)
        cart.id = cid
        cart.product = productoFind.code
        carts.push(cart)
    }
    else{
        let agregarCantidad = carts.find((index)=>index.id == cid)
        ++agregarCantidad.quantity
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({
        message: `Todo OK...`,
        carts 
    })

})
module.exports = {
    router
}
