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

    let pizza = new Pizza({tamanio:"", masa:"", gustos:""});
    pizza.tamanio = prompt("Ingrese el tamaño de la pizza");
    pizza.masa = prompt("Ingrese la masa de la pizza");
    pizza.gustos = prompt("Ingrese los gustos de la pizza");

    pizza.entregarPizza();