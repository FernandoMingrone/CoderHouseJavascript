
const compra_venta = prompt("Elegir compra o venta de dolares");


const dolarCantidad = prompt("Cuantos dolares desea cambiar?")


if (compra_venta == "compra" || compra_venta == "venta") { 
    comprarVender();
} else { 
    prompt("Elegir compra o venta de dolares");
};


function deDolarApesosCompra(dolarCantidad){
    const valorDolarVenta = 205;
    return dolarCantidad * valorDolarVenta;
};

function deDolarApesosVenta(dolarCantidad){
    const valorDolarCompra = 201;
    return dolarCantidad * valorDolarCompra;
};

function comprarVender() {

    if (compra_venta == "compra") {
        deDolarApesosCompra(dolarCantidad);
        return alert("Usted ingresó la cantidad de"+ " " +dolarCantidad + " " + "dolares, que son iguales a " + deDolarApesosCompra(dolarCantidad)+ " " + "pesos" );
        
    } else if (compra_venta == "venta") {
        deDolarApesosVenta(dolarCantidad)
        return alert("Usted ingresó la cantidad de"+ " " + dolarCantidad + " " + "dolares, que son iguales a " + deDolarApesosVenta(dolarCantidad)+ " " + "pesos" );
} else { 
    prompt("Elegir compra o venta de dolares");
}

    };
