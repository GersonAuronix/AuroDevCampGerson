import { calculaImporte, calculaGanancia } from './calculos.js';
import { entrada, salida } from './lecturaYEscritura.js';

const datos = entrada();
const tipoAlquiler = datos[0];
const parametroAlquiler = datos[1];

if (tipoAlquiler !== 'h' && tipoAlquiler !== 'k') {
  console.log('Parametros invalidos');
  process.exit(0);
}

const importe = calculaImporte(tipoAlquiler, parametroAlquiler);
const ganancia = calculaGanancia(importe);
salida(importe, ganancia);
