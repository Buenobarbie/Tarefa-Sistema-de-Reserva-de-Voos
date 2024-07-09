const fs = require('fs');
const path = require('path');
const fsPromise = require('fs').promises;

async function lerReserva(cpf){
    const filePath = path.join(__dirname,"..", "/reservas", `${cpf}.json`);
    const data = await fsPromise.readFile(filePath, 'utf-8');
    const dados = JSON.parse(data);
    console.log(dados)
}

//console.log(lerReserva(1234));

module.exports = lerReserva;