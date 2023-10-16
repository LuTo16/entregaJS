let nombre = prompt ("Ingrese su nombre");
alert ("Binevenida/o " + nombre + " vamos a jugar");
alert ("Deberas estar atenta/o a los pasos requeridos para avanzar")
alert ("COMENZAMOS!")

let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let operacion = prompt("Elegí la operación que deseas realizar (+,-,*,/)");
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
alert ("escribe tu resultado en un cuaderno para saber si lo has resuleto bien");
alert ("Ahora averiguaremos si es correcto");

switch (operacion){
    case "+":
        alert("el resultado de la suma es: " + (numero1 + numero2))
        break
    case "-":
        alert("el resultado de la resta es: " + (numero1 - numero2))
        break
    case "*":
        alert("el resultado de la multiplicación es: " + (numero1 * numero2))
        break
    case "/":
        alert("el resultado de la división es: " + (numero1 / numero2))
        break
    default:
        alert("la operacion ingresada no es valida")
        break
}