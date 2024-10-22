import { calculaImporte, calculaGanancia } from './calculos.js';
import { entrada, salida } from './lecturaYEscritura.js';

const datos = entrada();
const tipoAlquiler = datos[0];
const parametroAlquiler = datos[1];

const importe = calculaImporte(tipoAlquiler, parametroAlquiler);
if (importe <= -1 && importe >= -3) {
  throw new Error('Uno o mas parametros son incorrectos');
}

const ganancia = calculaGanancia(importe);
salida(importe, ganancia);
