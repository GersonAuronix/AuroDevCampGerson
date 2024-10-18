//console.log('Hola, esto es una prueba');
const args = process.argv.slice(2);
//console.log('Argumentos recibidos:', args);

switch (args[0]) {
  case 'h':
    const importe = Number(args[1]) * 99;
    const ganancia = importe * .45;
    console.log(`importe: ${importe} & ganancia: ${ganancia}`);
    break;
  case 'k':
    break;
  default:
    break;
}
