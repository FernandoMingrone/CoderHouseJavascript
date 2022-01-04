//Venta y Alquiler de propiedades


class PedidoDePropiedad {
    constructor(tipoDeOperacion, tipoDePropiedad, ubicacion) {
        this.tipoDeOperacion = tipoDeOperacion;
        this.tipoDePropiedad = tipoDePropiedad;
        this.ubicacion = ubicacion;
    }
}

class Propiedad {
    constructor(title, price, thumbnail) {
        this.tipoDePropiedad = title;
        this.precio = price;
        this.img = thumbnail;
    }
}



let propiedades = [];



let pedidos = []

let datosForm = document.getElementById("formDatos")
let divPropiedades = document.getElementById("divMostrarPropiedades")
let mensajeElse = document.getElementById("mensaje");


//DESAFÍO EVENTOS

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
// $(() => {
//     $("#btn-propiedades").on("click", () => {
//         let propiedadesEnStorage = JSON.parse(localStorage.getItem("keyPedidos"))
//         if(divPropiedades.children.length == 0 ) {
        

//             //LA IDEA SERÍA FILTRAR Y MOSTRAR LAS PROPIEDADES
//             //BUSCADAS SEGÚN LOS DATOS INGRESADOS
//             //POR AHORA NO LO PUDE HACER ASI QUE ESTOY MOSTRANDO LOS DATOS INGRESADOS
//             propiedadesEnStorage.forEach((propiedadesEnArray, indice) => {
//                 $("#divMostrarPropiedades").append(
//                     `
//                     <div class="card" id="propiedad${indice}">
//                         <div class="cardBody">
//                         <h5 class="cardText">${propiedadesEnArray.tipoDeOperacion}</h5>
//                             <h5 class="cardText">${propiedadesEnArray.title}</h5>
//                             <p class="cardText">${propiedadesEnArray.location}</p>
//                             <p class="cardText">${propiedadesEnArray.price}</p>
//                             <button type="button" class="btnCard" id="boton-${indice}">Eliminar</button>
//                         </div>
//                     </div>`
//                     ) 
//             }) 
//         } else {
//             mensajeElse.innerText = "Vuelva a ingresar los datos por favor"
//         }

//     })
// })

function mostrarPropiedades(){
    // $("#btn-propiedades").empty();
    propiedades.forEach((propiedadesEnArray, indice) => {
                $("#divMostrarPropiedades").append(
                    `<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src=${propiedadesEnArray.img} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${propiedadesEnArray.tipoDePropiedad}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Precio: $${propiedadesEnArray.precio}</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Contactar</a>
                        </div>
                    </div>`
                    ) 
        
    })
}

// let botonPropiedades = document.getElementById("btn-propiedades")


// botonPropiedades.addEventListener("click", () => {
// })



let title = document.getElementById("title");
let imagenCasa = document.getElementById("imgPropiedad")

title.innerHTML = "Prodigy House - Venta y Alquiler de Propiedades";
imagenCasa.innerHTML += `<img src="./images/todd-kent-178j8tJrNlc-unsplash.jpg" style= "width: 18em">`

let darkMode;

if(localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode")
} else {
    darkMode = "light"
}

localStorage.setItem("darkMode", darkMode)

$(() => {
    if(localStorage.getItem("darkMode") == "dark") {
        $("#nav").addClass("darkMode")
        $("#section").addClass("darkMode2")
        $("#footer").addClass("darkMode2")
        $("#propiedades").addClass("darkMode")
        $("#divMostrarPropiedades").addClass("darkModeCard")
        $("#btnDark").hide()
        $("#btnLight").show()
    } else {
        $("#btnLight").hide()
    };

    $("#btnLight").click(() => {
        $("#btnDark").show()
        $("#btnLight").hide() 
        $("#nav").removeClass("darkMode")
        $("#section").removeClass("darkMode2")
        $("#footer").removeClass("darkMode2")
        $("#propiedades").removeClass("darkMode")
        localStorage.setItem("darkMode", "light")
    })

        $("#btnDark").click(() => {
        $("#btnDark").hide()
        $("#btnLight").show() 
        $("#nav").addClass("darkMode")
        $("#section").addClass("darkMode2")
        $("#footer").addClass("darkMode2")
        $("#propiedades").addClass("darkMode")
        $("#divMostrarPropiedades").addClass("darkModeCard")
        localStorage.setItem("darkMode", "dark")
    })
})

//ME FALTÓ ENCONTRAR UNA API DE INMOBILIARIAS...


    $.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA1459", function (data) {
        data.results.forEach(elemento => {
            propiedades.push(new Propiedad(elemento.title, elemento.price, elemento.thumbnail))
        })
        console.log(data.results);
        mostrarPropiedades();
    })

    console.log(propiedades);