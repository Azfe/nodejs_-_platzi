try {
    const [minArg, maxArg] = process.argv.slice(2).map(Number);
    console.log('Arguments:', [minArg, maxArg]);

    // Validar que ambos argumentos existan y sean números 
    const min = Number(minArg); 
    const max = Number(maxArg);

    const argsValidos = !isNaN(min) && !isNaN(max) && minArg !== undefined && maxArg !== undefined && min < max;

    if (!argsValidos) {
        throw new Error('⚠ Argumentos inválidos. Usando valores por defecto (1-100).');
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Generar número aleatorio entre min y max (incluidos)
    console.log(`🎲 Número aleatorio entre ${min} y ${max}: ${randomNumber}`);

}catch (error) {
    console.error(`⚠ Error: ${error.message}`); 
    console.log('ℹ Usa: node script.js <min> <max>');
}