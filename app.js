import { calculaImporte, calculaGanancia } from './calculos.js';
import { entrada, salida } from './lecturaYEscritura.js';

const datos = entrada();
const tipoAlquiler = datos[0];
const parametroAlquiler = datos[1];

const importe = calculaImporte(tipoAlquiler, parametroAlquiler);
if (importe <= -1 && importe >= -3) {
  console.log('uno o mas parametros son incorrectos');
  process.exit(0);
}

const ganancia = calculaGanancia(importe);
salida(importe, ganancia);
