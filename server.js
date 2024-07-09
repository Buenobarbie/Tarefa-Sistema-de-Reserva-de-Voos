const http = require('http');

const server = http.createServer();

server.on('request', (req , res) => {
    let {method , url} = req;
    url = url.split("/");
    if(url[1] == "reservas"){      
        res.writeHead(201, {'Content-Type': 'text/plain'});
        res.end("hey");
    }
    else{
        res.statusCode = 404;
        res.end("Pagina nao encontrada \nTente buscar /reservas/{cpf}");
    }
    
    
});

server.listen(8080);