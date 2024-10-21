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

const calculaGanancia = (importe) => {
  return importe * porcentajeGanancia;
};

const datos = entrada();
const tipoAlquiler = datos[0];
let importe = 0;

if (tipoAlquiler !== 'h' && tipoAlquiler !== 'k') {
  console.log('Parametros invalidos');
  process.exit(0);
}

if (tipoAlquiler === 'h') {
  importe = Number(datos[1]) * costoPorHora;
} else {
  importe = costoBaseKm + Number(datos[1]) * costoPorKm;
}

const ganancia = calculaGanancia(importe);
salida(importe, ganancia);
