const express = require('express');
const app = express();
const port = 3000

const products =[
    {
        id: 1,
        nombre: "Escoba",
        precio: 10.50,
        stock: 7
    },
    {
        id: 2,
        nombre: "Recogedor",
        precio: 12.00,
        stock: 2
    },
    {
        id: 3,
        nombre: "Tomacorriente",
        precio: 25,
        stock: 3
    },
        {
        id: 4,
        nombre: "Silla",
        precio: 30,
        stock: 9
    },
        {
        id: 5,
        nombre: "Mesa",
        precio: 78,
        stock: 2
    }
]


app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
});
app.get('/products',(req,res)=>{
    let limit= req.query.limit;
    
    if(limit){
        console.log(limit)
        let prod_filter = products.filter((index)=> index.id <= limit)
        res.send(prod_filter)
    }else{
        res.send(products)
    }
});

app.get('/products/:id',(req,res)=>{
    let id = req.params.id;
    let producto = products.find(e=>e.id == id);
    if(producto){
        res.json(producto)
    }else{
        res.send(`No existe el producto con el ID ${id}`)
    }
});
app.get('/bienvenida',(req,res)=>{
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.send(products)
});
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});