// Lista de productos sin img
const productos = [
    { "id": 1, "nombre": "Taza de Café", "name2": "Coffee Mug", "precio": 5.99, "descripcion": "Taza de cerámica, 350ml." },
    { "id": 2, "nombre": "Cuchillo de Cocina", "name2": "Kitchen Knife", "precio": 12.49, "descripcion": "Cuchillo de acero inoxidable, 20cm." },
    { "id": 3, "nombre": "Sartén Antiadherente", "name2": "Non-stick Pan", "precio": 18.99, "descripcion": "Sartén antiadherente, 28cm de diámetro." },
    { "id": 4, "nombre": "Tabla de Cortar", "name2": "Cutting Board", "precio": 7.49, "descripcion": "Tabla de cortar de bambú, 30x20cm." },
    { "id": 5, "nombre": "Rallador de Queso", "name2": "Cheese Grater", "precio": 6.29, "descripcion": "Rallador de queso de acero inoxidable, 4 caras." },
    { "id": 6, "nombre": "Báscula de Cocina", "name2": "Kitchen Scale", "precio": 15.99, "descripcion": "Báscula digital para cocina, capacidad de 5kg." },
    { "id": 7, "nombre": "Set de Cubiertos", "name2": "Cutlery Set", "precio": 24.99, "descripcion": "Juego de cubiertos de acero inoxidable, 24 piezas." },
    { "id": 8, "nombre": "Tostadora", "name2": "Toaster", "precio": 19.99, "descripcion": "Tostadora de pan con capacidad para 2 rebanadas." },
    { "id": 9, "nombre": "Licuadora", "name2": "Blender", "precio": 29.99, "descripcion": "Licuadora de alta velocidad, 1.5L." },
    { "id": 10, "nombre": "Plancha a Vapor", "name2": "Steam Iron", "precio": 22.49, "descripcion": "Plancha a vapor con control de temperatura ajustable." },
    { "id": 11, "nombre": "Reloj de Pared", "name2": "Wall Clock", "precio": 15.99, "descripcion": "Reloj de pared decorativo, 30cm de diámetro." },
    { "id": 12, "nombre": "Tijeras de Cocina", "name2": "Kitchen Scissors", "precio": 8.49, "descripcion": "Tijeras multifuncionales de acero inoxidable." },
    { "id": 13, "nombre": "Set de Ollas", "name2": "Cookware Set", "precio": 49.99, "descripcion": "Juego de ollas de acero inoxidable, 5 piezas." },
    { "id": 14, "nombre": "Organizador de Cocina", "name2": "Kitchen Organizer", "precio": 12.99, "descripcion": "Organizador de cocina de metal, 3 niveles." },
    { "id": 15, "nombre": "Colador de Pasta", "name2": "Pasta Strainer", "precio": 10.99, "descripcion": "Colador de acero inoxidable, 25cm de diámetro." },
    { "id": 16, "nombre": "Pelador de Vegetales", "name2": "Vegetable Peeler", "precio": 4.99, "descripcion": "Pelador de vegetales con hoja de acero inoxidable." },
    { "id": 17, "nombre": "Jarra Medidora", "name2": "Measuring Jug", "precio": 7.99, "descripcion": "Jarra medidora de plástico, 1L." },
    { "id": 18, "nombre": "Espátula de Silicona", "name2": "Silicone Spatula", "precio": 3.99, "descripcion": "Espátula de silicona resistente al calor." },
    { "id": 19, "nombre": "Batidora de Mano", "name2": "Hand Mixer", "precio": 25.99, "descripcion": "Batidora de mano eléctrica, 5 velocidades." },
    { "id": 20, "nombre": "Set de Refractarios", "name2": "Glass Containers Set", "precio": 34.99, "descripcion": "Juego de refractarios de vidrio, 3 piezas." },
    { "id": 21, "nombre": "Cuchara Medidora", "name2": "Measuring Spoon", "precio": 5.49, "descripcion": "Juego de cucharas medidoras de acero inoxidable, 6 piezas." },
    { "id": 22, "nombre": "Jarra para Agua", "name2": "Water Jug", "precio": 9.99, "descripcion": "Jarra para agua de vidrio, 1.5L." },
    { "id": 23, "nombre": "Termo de Acero", "name2": "Steel Thermos", "precio": 19.49, "descripcion": "Termo de acero inoxidable, 1L." },
    { "id": 24, "nombre": "Cafetera de Goteo", "name2": "Drip Coffee Maker", "precio": 29.99, "descripcion": "Cafetera de goteo, capacidad para 12 tazas." },
    { "id": 25, "nombre": "Ensaladera", "name2": "Salad Bowl", "precio": 13.99, "descripcion": "Ensaladera de cerámica, 25cm de diámetro." },
    { "id": 26, "nombre": "Descorchador", "name2": "Corkscrew", "precio": 6.99, "descripcion": "Descorchador de vino de acero inoxidable." },
    { "id": 27, "nombre": "Batidor de Mano", "name2": "Whisk", "precio": 3.49, "descripcion": "Batidor de mano de acero inoxidable." },
    { "id": 28, "nombre": "Rodillo de Madera", "name2": "Wooden Rolling Pin", "precio": 8.49, "descripcion": "Rodillo de madera para masa, 45cm de largo." },
    { "id": 29, "nombre": "Tazón Mezclador", "name2": "Mixing Bowl", "precio": 12.49, "descripcion": "Tazón mezclador de acero inoxidable, 3L." },
    { "id": 30, "nombre": "Mortero y Maja", "name2": "Mortar and Pestle", "precio": 14.99, "descripcion": "Mortero y maja de mármol, 12cm de diámetro." }
];


let accessKey = 's2-KYnpBHHPer-NHR5EtCEqQV5f1Vj7huYNBq7PY_lQ';
let carrito = [];
let urlsImg = [];

// Cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
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
    alert(`${producto.nombre} ha sido añadido al carrito.`);
}

// Mostrar carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const oscurecerFondo = document.getElementById('oscurecerFondo');
    oscurecerFondo.className="oscurecer";
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
    oscurecerFondo.className="";
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
document.getElementById('buscar').addEventListener('input', filtrarProductos);

// Cargar carrito y mostrar productos al cargar la página

//Tarer imágenes con API de Unsplash


const getImagenes = (productos) => {
    for (let index = 0; index < productos.length; index++) {
        let urlApi = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${productos[index].name2}`
        fetch(urlApi)
            .then(res => res.json())
            .then(data => {
                productos[index]["imagen"]=data.results[0].urls.regular
            })
            .catch(error => {
                console.error('Error al obtener imágenes:', error);
            });

    }

}



// Como getImagenes es asíncrono, colocamos un retardo antes de mostrar urlsImg
setTimeout(() => {
    console.log('Final array:', productos);
    // Aquí puedes continuar con otras operaciones que dependan de urlsImg
    //document.getElementById('image').src = urlsImg[0];
    cargarCarrito();
    mostrarProductos(productos);
}, 1000);

getImagenes(productos);



