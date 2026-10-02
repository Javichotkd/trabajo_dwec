"use strict";

window.onload = principal;

function principal() {
 document.getElementById("miBoton1").onclick = () => manejadorClick1();
 document.getElementById("miBoton2").onclick = () => manejadorClick2();
 document.getElementById("miBoton3").onclick = () => manejadorClick3();
 document.getElementById("miBoton4").onclick = () => manejadorClick4();
 document.getElementById("miBoton5").onclick = () => manejadorClick5();
 document.getElementById("miBoton6").onclick = () => manejadorClick6();
}

function manejadorClick1() {
    let numero1 = 17;
let numero2 = 5;

// Operadores aritméticos
console.log("Suma:", numero1 + numero2);
console.log("Resta:", numero1 - numero2);
console.log("Multiplicación:", numero1 * numero2);
console.log("División:", numero1 / numero2);
console.log("Resto:", numero1 % numero2);

// Operadores de asignación
let puntos = 10;

puntos += 5;  // 10 + 5 = 15
puntos *= 2;  // 15 * 2 = 30
puntos -= 4;  // 30 - 4 = 26

console.log("Puntos finales:", puntos);
}

function manejadorClick2() {let a = 5;
let b = 2;
let resultado1 = a++ + b;

console.log("Primer caso:");
console.log("resultado1 =", resultado1);
console.log("a =", a);

// Segundo caso: preincremento
let c = 5;
let d = 2;
let resultado2 = ++c + d;

console.log("Segundo caso:");
console.log("resultado2 =", resultado2);
console.log("c =", c);
}

function manejadorClick3() {
    let edad1 = 18;
    let edad2 = "18";

    console.log("edad1 == edad2:", edad1 == edad2);
    console.log("edad1 === edad2:", edad1 === edad2);
    console.log("edad1 != edad2:", edad1 != edad2);
    console.log("edad1 !== edad2:", edad1 !== edad2);
    console.log("edad1 > 15:", edad1 > 15);
    console.log('edad2 === "18":', edad2 === "18");
}