//Creo el pedido de pizza
class Pizza{
    
    constructor(tamanio,masa,gustos){
        this.tamanio = tamanio;
        this.masa = masa;
        this.gustos = gustos;
    }
        entregarPizza(){      
    console.log(`Pizza ${this.tamanio} a la ${this.masa} con los siguientes gustos: ${this.gustos}`);
        }
    };



    const primerPedidoDelDia = [];

    function pedirPizza() {
        let pedidoDePizza = new Pizza({tamanio:"", masa:"", gustos:"", quiereOtra: false});
        pedidoDePizza.tamanio = prompt("Ingrese el tamaño de la pizza");
        pedidoDePizza.masa = prompt("Ingrese la masa de la pizza");
        pedidoDePizza.gustos = prompt("Ingrese los gustos de la pizza");
        pedidoDePizza.quiereOtra = prompt("¿Quiere otra pizza? (si/no)");
    
        pedidoDePizza.entregarPizza();
         primerPedidoDelDia.push(pedidoDePizza);

            if (pedidoDePizza.quiereOtra == "si") {
                pedirPizza();
            } else if (pedidoDePizza.quiereOtra == "no") {
                console.log("Gracias por su compra");
            } else {
                alert("Ingrese una respuesta valida");
            }
        }



    


    pedirPizza();


    console.log(primerPedidoDelDia);