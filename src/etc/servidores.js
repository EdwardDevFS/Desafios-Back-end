const http = require("http");
const PORT = 3000;
const host = 'localhost';

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.write("Peticion Recibida....!!! <br>")
    res.end("OK......!!!")

});

server.listen(PORT,host, ()=>{
    console.log(`Servidor esuchando en ${host}:${PORT}`)
})