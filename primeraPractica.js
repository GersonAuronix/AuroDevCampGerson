const args = process.argv.slice(2);

switch (args[0]) {
  case 'h':
    const importe = Number(args[1]) * 99;
    const ganancia = importe * .45;
    console.log(`importe: ${importe} & ganancia: ${ganancia}`);
    break;
  case 'k':
    const importekm = 100 + Number(args[1]) * 10;
    const gananciakm = importekm * .45;
    console.log(`importe: ${importekm} & ganancia: ${gananciakm}`);
    break;
  default:
    break;
}
