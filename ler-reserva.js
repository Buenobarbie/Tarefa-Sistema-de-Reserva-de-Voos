const fs = require('fs');
const path = require('path');
const fsPromise = require('fs').promises;
const process = require('process');

async function lerReserva(cpf){
    const filePath = path.join(__dirname, "/reservas", `${cpf}.json`);
    const data = await fsPromise.readFile(filePath, 'utf-8');
    const dados = JSON.parse(data);
    console.log(`
    RESERVA CPF ${cpf}
    Nome: ${dados.nome}
    Data: ${dados.data}
    Origem: ${dados.origem}
    Destino: ${dados.destino}
    `)
}

//console.log(lerReserva(1234));

[pass , pass2, cpf] = process.argv;
lerReserva(cpf);