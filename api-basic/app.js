const http = require("http"); //Llamando al modulo HTTP desde NodeJS

const hostname = '127.0.0.1';
const port = 3000;

// Crea el servidor
const server = http.createServer((req, res)=>{
    // Peteción
    if(req.method == 'GET'){
        res.statusCode = 200; //200 OK
        res.setHeader('Content-Type', 'text/plain'); 
        res.end('Soy una respuesta GET');
    }
    if(req.method == 'POST'){
        res.statusCode = 200; //200 OK
        res.setHeader('Content-Type', 'text/plain'); 
        res.end('Soy una respuesta POST');
    }
});

server.address(hostname);
server.listen(port, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
});