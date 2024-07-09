const fs = require('fs');
const path = require('path');
const process = require('process')

const [pass, pass2, nome , cpf, data , origem , destino] = process.argv;


function criarReserva(cpf,nome,data , origem , destino ){
    const filePath = path.join(__dirname, "/reservas", `${cpf}.json`);
    const obj = {
        "nome": nome,
        "data" : data,
        "origem" : origem,
        "destino" : destino
    };
    fs.writeFile(filePath,JSON.stringify(obj), () => {});
    console.log('Reserva criada com sucesso!!');
}

criarReserva(cpf, nome , data , origem, destino);

