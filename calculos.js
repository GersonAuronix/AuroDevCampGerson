const costoPorHora = 99;
const costoBaseKm = 100;
const costoPorKm = 10;
const porcentajeGanancia = .45;

export function calculaImporte(tipoAlquiler, parametroAlquiler) {
  if (tipoAlquiler === 'h') {
    return parametroAlquiler * costoPorHora;
  } else {
    return costoBaseKm + parametroAlquiler * costoPorKm;
  }
};

export function calculaGanancia(importe) {
  return importe * porcentajeGanancia;
};