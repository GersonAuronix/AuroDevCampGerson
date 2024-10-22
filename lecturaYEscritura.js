export function entrada() {
  return process.argv.slice(2);
};

export function salida(importe, ganancia) {
  console.log(`importe: ${importe} & ganancia: ${ganancia}`);
  return true;
}