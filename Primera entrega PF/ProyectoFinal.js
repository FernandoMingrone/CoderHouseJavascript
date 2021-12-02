//Venta y Alquiler de propiedades


//Yo lo que quiero es que:
//1) el cliente me pida lo que quiere
//2) Armar un objeto del pedido con sus propiedades
//3) Tener una lista de propiedades para ofrecer
//4) Compararlo con las propiedades que tengo
//5) Ofrecer las propiedades que mejor se ajusten
//6) Si no tengo la propiedad que quiere, le aviso que no la tengo





// Nosotros tenemos una lista de propiedades hechas con la clase Propiedad

class PedidoDePropiedad {
    constructor(tipoDeOperacion) {
        // this.tipoDePropiedad = tipoDePropiedad;
        // this.ubicacion = ubicacion;
        // this.precio = precio;
        this.tipoDeOperacion = tipoDeOperacion;
        //this.estado = estado;
    }
    
    // entregarPropiedades() {
    //     if (this.tipoDeOperacion === "Compra") {
    //         alert("Le podemos ofrecer un" + + "en " + this.ubicacion + "que cuesta " + this.precio + "$");
    //     }
    // }
}


//3) Tener una lista de propiedades para ofrecer

class Propiedad {
    constructor(tipoDeOperacion, tipoDePropiedad, ubicacion, precio) {
        this.tipoDeOperacion = tipoDeOperacion;
        this.tipoDePropiedad = tipoDePropiedad;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}

const propiedad1 = new Propiedad("Compra", "Casa", "Almagro", "150000");
const propiedad2 = new Propiedad("Alquiler", "PH", "Villa Urquiza", "20000");

let propiedades = [];
propiedades.push(propiedad1, propiedad2);


//2) Armar un objeto del pedido con sus propiedades

let pedido1 = new PedidoDePropiedad({tipoDeOperacion: ""});

//1) el cliente me pida lo que quiere
pedido1.tipoDeOperacion = prompt("¿Qué tipo de operación desea realizar? (Compra o Alquiler)");






console.log(propiedades);

//4) Compararlo con las propiedades que tengo
busqueda1 = propiedades.find(elemento => elemento.tipoDeOperacion === pedido1.tipoDeOperacion);

//5) Ofrecer las propiedades que mejor se ajusten
//6) Si no tengo la propiedad que quiere, le aviso que no la tengo

if (busqueda1 === undefined) {
    alert("No tenemos la propiedad que busca");
} else if (busqueda1.tipoDeOperacion === pedido1.tipoDeOperacion) {
    alert("Le podemos ofrecer una " + busqueda1.tipoDePropiedad + " en " + busqueda1.ubicacion + " que cuesta " + busqueda1.precio + "$");
}
    

console.log(busqueda1);


const title = document.getElementById("title");
const propiedadesDom = document.getElementById("propiedades");

title.innerHTML = "Prodigy House - Venta y Alquiler de Propiedades";

let = ( id= 1, propiedad= "Casa", ubicacion= "Almagro", precio= 150000, tipoDeOperacion= "Compra", estado= "Disponible" );

let contenedor = document.createElement("div");

contenedor.innerHTML = `<h3>${id}</h3>
<p>${propiedad}</p>
<p>${ubicacion}</p>
<p>${precio}</p>
<p>${tipoDeOperacion}</p>
<p>${estado}</p>`;



document.body.appendChild(contenedor);



















// const casa = new Propiedad("Casa", "Calle falsa 123", "1.000.000", "Venta", "Nueva");
// const departamento = new Propiedad("Departamento", "Calle falsa 123", "500.000", "Compra", "Nuevo");
// const localComercial = new Propiedad("Local Comercial", "Calle falsa 123", "100.000", "Alquiler", "Nuevo");
// const PH = new Propiedad("PH", "Calle falsa 123", "100.000", "Alquiler", "Nuevo");
// const terreno = new Propiedad("Terreno", "Calle falsa 123", "100.000", "Alquiler", "Nuevo");


// // En base al pedido ofrecemos en base a lo que tenemos en la lista
// let propiedades = [casa, departamento, localComercial, PH, terreno];



// consultaPropierdades();

// console.log(propiedad);