const fs = require('fs');

const fileName = 'example.txt';

// CREAR UN ARCHIVO
fs.writeFileSync(fileName, 'Hola, este es un archivo de ejemplo.');
console.log(`Archivo ${fileName} creado.`);

// LEER UN ARCHIVO
const content = fs.readFileSync(fileName, 'utf-8');
console.log(`Contenido del archivo ${fileName}: ${content}`);


// ACTUALIZAR UN ARCHIVO
fs.appendFileSync(fileName, '\nEsta es una línea añadida.');
console.log(`Archivo ${fileName} actualizado.`);

// ELIMINAR UN ARCHIVO
fs.unlinkSync(fileName);
console.log(`Archivo ${fileName} eliminado.`);