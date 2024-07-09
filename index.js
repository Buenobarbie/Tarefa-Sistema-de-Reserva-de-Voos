
const fs = require('fs');
const path = require('path');
const fsPromise = require('fs').promises;
const process = require('process');

async function lerReserva(cpf, res){
    const filePath = path.join(__dirname, "/reservas", `${cpf}.json`);
    const data = await fsPromise.readFile(filePath, 'utf-8');
    const dados =  JSON.parse(data);
    res.writeHead(201, {'Content-Type': 'text/plain'});
    res.end(`
    RESERVA DO CPF ${cpf}
    Nome: ${dados.nome}
    Data: ${dados.data}
    Origem: ${dados.origem}
    Destino: ${dados.destino}
    `);
}

console.log(`

    Bem-vindo(a) à Agência de Viagens
    Processo: ${process.pid} Plataforma: ${process.platform}  Arquitetura: ${process.arch}
    ====================================================
    
`);

const http = require('http');

const server = http.createServer();
const vehicles = ["palio", "honda", "fusca azul"];

server.on('request', (req , res) => {
    const {method , url} = req;
    const cpf = url.slice(1);
    if(url){     
        lerReserva(cpf, res);
        
        
    }
    else{
        res.statusCode = 404;
        res.end("Pagina nao encontrada");
    }
    
    
});

server.listen(8080);

