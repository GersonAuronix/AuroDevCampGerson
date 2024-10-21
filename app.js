// const args = process.argv.slice(2);
const costoPorHora = 99;
const porcentajeGanancia = .45;
const costoBaseKm = 100;
const costoPorKm = 10;

const entrada = () => {
  return process.argv.slice(2);
};

const salida = (importe, ganancia) => {
  console.log(`importe: ${importe} & ganancia: ${ganancia}`);
};

const datos = entrada();

switch (datos[0]) {
  case 'h':
    const importe = Number(datos[1]) * costoPorHora;
    const ganancia = importe * porcentajeGanancia;
    salida(importe, ganancia);
    break;
  case 'k':
    const importekm = costoBaseKm + Number(datos[1]) * costoPorKm;
    const gananciakm = importekm * porcentajeGanancia;
    salida(importekm, gananciakm);
    break;
  default:
    console.log('Parametros invalidos');
    break;
}
