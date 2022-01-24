
if(!localStorage.getItem("carrito")) {
        localStorage.setItem("carrito", JSON.stringify([]))
    }     

    
/////CARGO LOS PRODUCTOS

let divProductos = document.getElementById("divProductos");
    
fetch("productos.json")
            .then(res=>res.json())
            .then(data => {
                data.forEach((productoEnArray, indice) => {
                    divProductos.innerHTML += `
                            <div class="cardStyle">
                                <div class="card mb-3 nombreProductoCard">
                                    <h3 class="card-header card-header-height">${productoEnArray.nombre}</h3>
                                    <div class="card-body">
                                        <h5 class="card-title">Summer Collection</h5>
                                        <h6 class="card-subtitle text-muted">2022</h6>
                                    </div>
                                    <img class="imgSize" src="${productoEnArray.img}" alt="" />
                                    <div class="card-footer text-muted">
                                    ${productoEnArray.categoria}
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">$${productoEnArray.precio}</li>
                                    </ul>
                                    <div class="card-body">
                                    <button id="boton${indice}">
                                        Comprar
                                    </button>
                                    </div>
                                </div>
                                
                                </div>
                            </div>
                    `
                });

                productos = JSON.parse(localStorage.getItem("carrito"));

                data.forEach((productoEnArray, indice) =>{
                    document.getElementById(`boton${indice}`).addEventListener("click", () => {
                    if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                    let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre) 
                    productos[index].cant++
                    localStorage.setItem("carrito", JSON.stringify(productos))
                    } else {
                    let nuevoProducto = new Producto(productoEnArray.categoria, productoEnArray.descripcion, productoEnArray.img, productoEnArray.precio, productoEnArray.nombre, productoEnArray.stock)
                    productos.push(nuevoProducto)
                    localStorage.setItem("carrito", JSON.stringify(productos))
                    }
            })
    })
})
            

