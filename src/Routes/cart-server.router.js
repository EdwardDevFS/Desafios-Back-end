const Router = require('express').Router;
const router = Router()
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
    cart.id = cid
    cart.product = idP
    carts.push(cart);
    // TODO FALTA VALIDACION
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({
        message: `Todo OK...`,
        carts 
    })

})
module.exports = router
