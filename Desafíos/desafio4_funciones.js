// const monedaInicial = prompt("Que divisa tiene?")

// const monedaDeseada = prompt("Que divisa desea?")


const compra_venta = prompt ("Elegir compra o venta de dolares");


const dolarCantidad = () => prompt("Cuantos dolares?");



const valorDolarVenta = 205;
const valorDolarCompra = 201;

function deDolarApesosCompra(dolarCantidad){
  return dolarCantidad * valorDolarVenta
};

function deDolarApesosVenta(dolarCantitdad){
    return dolarCantidad * valorDolarCompra
};

function comprarVender() {
    if (compra_venta == "compra") {
        dolarCantidad();
        deDolarApesosCompra(dolarCantidad);
        
    } else {
        deDolarApesosVenta(dolarCantitdad)
}

return alert("Usted ingresó la cantidad de"+ " " +dolarCantidad + " " + "dolares, que son iguales a " + deDolarApesosCompra(dolarCantidad)+ " " + "pesos" );
    }


// function MonedaInicial(MonedaDeseada) {
//     return MonedaDeseada 
// }