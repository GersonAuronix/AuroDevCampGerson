import { calculaImporte, calculaGanancia } from "./calculos";


test('alquilar 1 hora cuesta 99', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('h', 3);
  //assert
  expect(resultado).toBe(297);
});

test('alquilar por km tiene costo base de 100 mas 10 por cada km', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('k', 3);
  //assert
  expect(resultado).toBe(130);
});

test('cantidad de horas negativas', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('h', -3);
  //assert
  expect(resultado).toBe(-1);
});

test('cantidad de km negativos', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('k', -3);
  //assert
  expect(resultado).toBe(-1);
});

test('cantidad de horas una letra', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('h', 'h');
  //assert
  expect(resultado).toBe(-2);
});

test('cantidad de km una letra', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('k', 'h');
  //assert
  expect(resultado).toBe(-2);
});

test('tipo de alquiler: decimal y cantidad: caracter', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte(3.4, 'h');
  //assert
  expect(resultado).toBe(-2);
});

test('tipo de alquiler: entero y cantidad: caracter', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte(3, 'h');
  //assert
  expect(resultado).toBe(-2);
});

test('tipo de alquiler desconocido - letra', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('j', 3);
  //assert
  expect(resultado).toBe(-3);
});

test('tipo de alquiler desconocido - numero', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte(1, 3);
  //assert
  expect(resultado).toBe(-3);
});

test('tipo de alquiler desconocido - decimal', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte(1.5, 3);
  //assert
  expect(resultado).toBe(-3);
});

test('cantidad de horas numero decimal', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('h', 3.5);
  //assert
  expect(resultado).toBe(346.5);
});

test('cantidad de km numero decimal', () => {
  //arrange (no hay)
  //act
  const resultado = calculaImporte('k', 3.5);
  //assert
  expect(resultado).toBe(135);
});