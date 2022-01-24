let modalBody = document.getElementById("modalBody");
let botonCarrito = document.getElementById("botonCarrito");

function cargarProductosModal(productosEnStorage) {
    modalBody.innerHTML = " ";

    productosEnStorage.forEach((producto, indice) => {
        modalBody.innerHTML +=
        `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>`
     })
}

botonCarrito.addEventListener("click", () => {
    let productosEnStorage = JSON.parse(localStorage.getItem("carrito"));
    cargarProductosModal(productosEnStorage)
    console.log(productosEnStorage);
})
