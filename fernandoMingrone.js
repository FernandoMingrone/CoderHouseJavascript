    //desafío 1

    // let nombre = prompt("Ingrese su nombre");
    // let apellido = prompt("Ingrese su apellido");

    // alert("Hola " + nombre + " " + apellido + "!");
    
    //desafío 2


let numero = prompt("adivine que numero es del 1 al 20");

numeroEntero = parseInt(numero);

if (numeroEntero === 9 || numeroEntero === 11) {
    alert("casi casi!!")
} 
else if (numero == 10) {
    alert("Adivinaste!!!")
}
else if (numeroEntero === 1 || numeroEntero === 20){
    alert("estas muy lejos!")
}
else if (numeroEntero <= 5 || numeroEntero >= 15){
    alert("todavía te falta mucho!")
}
else if (numeroEntero <= 9 && numeroEntero >= 5 || numeroEntero <= 15 && numeroEntero >= 11)  {
    alert("estas muy cerca!!!!")
}
else {
    alert("debe ser un numero")
};

// else if (numero !== typeof(Number)) {
//     alert("debe ser un numero")
// }
