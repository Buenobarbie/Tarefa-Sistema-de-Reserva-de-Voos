const fs = require('fs');
const path = require('path');

function criarReserva(cpf,nome,data , origem , destino , valor){
    const filePath = path.join(__dirname,"..", "/reservas", `${cpf}.json`);
    const obj = {
        "nome": nome,
        "data" : data,
        "origem" : origem,
        "destino" : destino,
        "valor" : valor
    };
    fs.writeFile(filePath,JSON.stringify(obj), () => {});
    console.log('arquivo criado');
}

//criarReserva(1234, 'barbara', "14-01-2023","são paulo", "timóteo", 120);

module.exports = criarReserva;