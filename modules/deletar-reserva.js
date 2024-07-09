const fs = require('fs');
const path = require('path');

function deletarReserva(cpf){
    const filePath = path.join(__dirname,"..", "/reservas", `${cpf}.json`);
    fs.unlink(filePath, () => {});
    console.log(`Reserva do CPF ${cpf} deletada`);
}

//deletarReserva(1234);
module.exports = deletarReserva;