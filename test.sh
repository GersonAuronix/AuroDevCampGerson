#!/bin/bash
#Test 1: Verificar que la cotizacion sea correcta con el parametro de horas
comando=$(node app.js h 3)
echo "$comando" | grep -q "importe: 297 & ganancia: 133.65"
if [ $? -eq 0 ]; then
  echo -e "\e[32mTest 1 aprobado! :D.\e[0m"
else
  echo -e "\e[31mTest 1 no aprobado :(.\e[0m"
fi

#Test 2: Verificar que la cotizacion sea correcta con el parametro de kilometros
comando=$(node app.js k 3)
echo "$comando" | grep -q "importe: 130 & ganancia: 58.5"
if [ $? -eq 0 ]; then
  echo -e "\e[32mTest 2 aprobado! :D.\e[0m"
else
  echo -e "\e[31mTest 2 no aprobado :(.\e[0m"
fi
