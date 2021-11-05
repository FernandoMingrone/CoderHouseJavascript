
let tablaDeMultiplicar = prompt("ingrese un numero del 1 al 10");

if (tablaDeMultiplicar == 0) {
    alert("ingrese un numero del 1 al 10")
} else {
    
    for (i = 0; i <= 10; i++) {
        let multiplicacion = i * tablaDeMultiplicar;
        console.log(multiplicacion);
}
};