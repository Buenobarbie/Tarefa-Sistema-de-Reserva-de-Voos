const fs = require('fs');
const path = require('path');
const process = require("process");

function deletarReserva(cpf){
    const filePath = path.join(__dirname, "/reservas", `${cpf}.json`);
    fs.unlink(filePath, () => {});
    console.log(`Reserva do CPF ${cpf} deletada :(`);
}

[pass, pass2, cpf] = process.argv;

deletarReserva(cpf);