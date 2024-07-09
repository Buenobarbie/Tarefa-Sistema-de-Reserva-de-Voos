const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,"/reservas");
console.log("RESERVAS ATUAIS:")
fs.readdir(filePath, (err, reservas) =>{
    reservas.forEach(reserva => console.log(reserva));
});