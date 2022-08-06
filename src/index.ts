//PROGRAMA PAR-IMPAR
let numIngresado: number;
numIngresado = Number(
  prompt("ingresar un numero distinto de cero a definir como PAR o Impar: ")
);
while (numIngresado === 0) {
  numIngresado = Number(
    prompt("Ud ingresó cero, por favor ingrese numero distinto de cero ")
  );
}
console.log("el numero ingresado es: " + numIngresado);
if (numIngresado % 2 === 0) {
  console.log("el numero ingresado es par");
} else {
  console.log("el numero ingresado es impar");
}
