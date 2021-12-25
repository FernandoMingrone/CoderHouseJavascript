//Venta y Alquiler de propiedades


class PedidoDePropiedad {
    constructor(tipoDeOperacion, tipoDePropiedad, ubicacion) {
        this.tipoDeOperacion = tipoDeOperacion;
        this.tipoDePropiedad = tipoDePropiedad;
        this.ubicacion = ubicacion;
    }
}

class Propiedad {
    constructor(tipoDeOperacion, tipoDePropiedad, ubicacion, precio) {
        this.tipoDeOperacion = tipoDeOperacion;
        this.tipoDePropiedad = tipoDePropiedad;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}

const propiedad1 = new Propiedad("Compra", "Casa", "Almagro", "$150000");
const propiedad2 = new Propiedad("Alquiler", "PH", "Villa Urquiza", "$20000");
const propiedad3 = new Propiedad("Compra", "Local", "Lugano", "$200000");
const propiedad4 = new Propiedad("Alquiler", "Departamento", "Paternal", "$2540000");
const propiedad5 = new Propiedad("Compra", "Casa", "Nuñez", "$2037000");
const propiedad6 = new Propiedad("Alquiler", "PH", "Saavedra", "$350000");
const propiedad7 = new Propiedad("Compra", "Terreno", "Belgrano", "$2320000");
const propiedad8 = new Propiedad("Alquiler", "Casa", "Villa Crespo", "$320000");
const propiedad9 = new Propiedad("Compra", "Casa", "Palermo", "$960000");
const propiedad10 = new Propiedad("Alquiler", "Casa", "Villa Urquiza", "$60000");

let propiedades = [];
propiedades.push(propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6,propiedad7,propiedad8,propiedad9,propiedad10);



let pedidos = []

let datosForm = document.getElementById("formDatos")
let divPropiedades = document.getElementById("divMostrarPropiedades")
let mensajeElse = document.getElementById("mensaje");




formDatos.addEventListener("submit", (e) => {
    e.preventDefault();
    let datosForm = new FormData(e.target);
    let nuevoPedido = new PedidoDePropiedad(datosForm.get("operacion"),
    datosForm.get("tipoDePropiedad"),
    datosForm.get("ubicacion"));
    pedidos.push(nuevoPedido);
    console.log(pedidos);
    localStorage.setItem("keyPedidos", JSON.stringify(pedidos));
    formDatos.reset()
    
})

// DESAFÍO JQUERY
$(() => {
    $("#btn-propiedades").on("click", () => {
        let propiedadesEnStorage = JSON.parse(localStorage.getItem("keyPedidos"))
        if(divPropiedades.children.length == 0 ) {
        
            propiedadesEnStorage.forEach((propiedadesEnArray, indice) => {
                divPropiedades.innerHTML += `
                <div class="card" id="propiedad${indice}">
                    <div class="cardBody">
                    <h5 class="cardText">${propiedadesEnArray.tipoDeOperacion}</h5>
                        <h5 class="cardText">${propiedadesEnArray.tipoDePropiedad}</h5>
                        <p class="cardText">${propiedadesEnArray.ubicacion}</p>
                        <button type="button" class="btnCard" id="boton-${indice}">Eliminar</button>
                    </div>
                </div>`
            }) 
        } else {
            mensajeElse.innerText = "Vuelva a ingresar los datos por favor"
        }

    })
})
// let botonPropiedades = document.getElementById("btn-propiedades")


// botonPropiedades.addEventListener("click", () => {
// })



let title = document.getElementById("title");
let imagenCasa = document.getElementById("imgPropiedad")

title.innerHTML = "Prodigy House - Venta y Alquiler de Propiedades";
imagenCasa.innerHTML += `<img src="./images/todd-kent-178j8tJrNlc-unsplash.jpg" style= "width: 10em">`








