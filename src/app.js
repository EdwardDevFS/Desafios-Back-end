const express = require('express');

const app = express();
const port = 8080


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productsServer = require('./Routes/Products.router').router
const cartServer = require('./Routes/cart-server.router').router

app.get('/',(req,res) =>{
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send("OK")
})


app.use('/api/products',productsServer)
app.use('/api/carts',cartServer)



const server = app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});
server.on('error',(error)=>{
    console.log(error)
})