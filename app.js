//Póngame un 20 profe!!!

let productos = [];
let carrito = [];
let urlsImg = [];
fetch("./data.json")
    .then(response => response.json())
    .then(data => { iniciar(data) })
    .catch(error => {
        console.error('Error al obtener imágenes:', error);
    });
const iniciar = (data) => {
    productos = data;
    cargarCarrito();
    mostrarProductos(productos);
}

function alerta(datos, tipo) {
    //En un mundo ideal habría varios tipos, pero en este caso solo son 2 y quise usar un ternario para no complicar.
    tipo ? bk = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(240,52,52,1) 0%, rgba(255,124,24,1) 100%)" : bk = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(52,240,106,1) 0%, rgba(188,255,24,1) 100%)";
    Toastify({
        text: datos,
        className: "info",
        style: {
            color: "black",
            background: bk,

        }
    }).showToast();

}





// Cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    } else {
        carrito = []
    }
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
// "Comprar todo el carrtip"  vaciar el carrito en localStorage
function vaciarCarrito() {
    if (carrito.length) {
        localStorage.clear();
        mostrarCarrito();
        alerta("Gracias por tu compra.")
    } else {
        alerta("No hay productos agregados", "TipoMalo");
        cerrarCarrito();
    }

}


// Mostrar productos en la página
function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
    });
}

// Agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(prod => prod.id === idProducto);
    const productoEnCarrito = carrito.find(item => item.id === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
        productoEnCarrito.totalPrecio = productoEnCarrito.cantidad * productoEnCarrito.precio;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1,
            totalPrecio: producto.precio
        });
    }

    guardarCarrito();
    alerta('"' + producto.nombre + '" se añadió al carrito');
}

// Mostrar carrito
function mostrarCarrito() {
    cargarCarrito();
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const oscurecerFondo = document.getElementById('oscurecerFondo');
    oscurecerFondo.className = "oscurecer";
    const productos = document.getElementsByClassName("producto");
    for (let index = 0; index < productos.length; index++) {
        productos[index].classList.add("oscurecerProducto")
    }
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        total += producto.totalPrecio;
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)} x ${producto.cantidad} = $${producto.totalPrecio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    document.getElementById('carrito').classList.add('carrito-visible');
}

// Cerrar carrito
function cerrarCarrito() {
    const oscurecerFondo = document.getElementById('oscurecerFondo');
    oscurecerFondo.className = "";
    const productos = document.getElementsByClassName("producto");
    for (let index = 0; index < productos.length; index++) {
        productos[index].classList.remove("oscurecerProducto")
    }
    document.getElementById('carrito').classList.remove('carrito-visible');
}

// Filtrar productos por nombre
function filtrarProductos() {
    const textoBusqueda = document.getElementById('buscar').value.toLowerCase();
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(textoBusqueda));
    mostrarProductos(productosFiltrados);
}

// Eventos
document.getElementById('verCarrito').addEventListener('click', mostrarCarrito);
document.getElementById('cerrarCarrito').addEventListener('click', cerrarCarrito);
document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);
document.getElementById('buscar').addEventListener('input', filtrarProductos);

// Cargar carrito y mostrar productos al cargar la página


/*

//Traer imágenes con API de Unsplash

const getImagenes = (productos) => {
    let accessKey = 's2-KYnpBHHPer-NHR5EtCEqQV5f1Vj7huYNBq7PY_lQ';
    for (let index = 0; index < productos.length; index++) {
        let urlApi = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${productos[index].name2}`
        fetch(urlApi)
            .then(res => res.json())
            .then(data => {
                productos[index]["imagen"] = data.results[0].urls.regular
            })
            .catch(error => {
                console.error('Error al obtener imágenes:', error);
            });

    }

    setTimeout(() => {
        console.log(JSON.stringify(productos));
    }, 1000);

}
*/






