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

        
    let pedidoDePizza = new Pizza({tamanio:"", masa:"", gustos:""});
    pedidoDePizza.tamanio = prompt("Ingrese el tamaño de la pizza");
    pedidoDePizza.masa = prompt("Ingrese la masa de la pizza");
    pedidoDePizza.gustos = prompt("Ingrese los gustos de la pizza");

    pedidoDePizza.entregarPizza();

    let primerPedidoDelDia = [];

    primerPedidoDelDia.push(pedidoDePizza);

    console.log(primerPedidoDelDia);