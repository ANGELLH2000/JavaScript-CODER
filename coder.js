// Declarar variables y objetos necesarios para simular el proceso seleccionado
let carrito = [];
let total = 0;

// Función para capturar entradas (añadir producto al carrito) con validación de datos
function capturarProducto() {
    let nombre;
    let precio;
    let cantidad;

    do {
        nombre = prompt("Introduce el nombre del producto:");
        if (!nombre) alert("El nombre no puede estar vacío. Inténtalo de nuevo.");
    } while (!nombre);

    do {
        precio = parseFloat(prompt("Introduce el precio del producto:"));
        if (isNaN(precio) || precio <= 0) alert("El precio debe ser un número mayor que cero. Inténtalo de nuevo.");
    } while (isNaN(precio) || precio <= 0);

    do {
        cantidad = parseInt(prompt("Introduce la cantidad del producto:"));
        if (isNaN(cantidad) || cantidad <= 0) alert("La cantidad debe ser un número entero mayor que cero. Inténtalo de nuevo.");
    } while (isNaN(cantidad) || cantidad <= 0);

    return { nombre, precio, cantidad };
}

// Función para añadir un producto al carrito
function agregarProductoAlCarrito(producto) {
    carrito.push(producto);
}

// Función para calcular el total del carrito
function calcularTotal() {
    total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    return total;
}

// Métodos de búsqueda y filtrado sobre el Array
function buscarProducto(nombre) {
    return carrito.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

function filtrarProductosPorPrecio(precioMinimo) {
    return carrito.filter(producto => producto.precio > precioMinimo);
}

// Función para mostrar el resumen del carrito con detalles
function mostrarResumen() {
    let total = calcularTotal();
    let resumen = "Resumen del carrito:\n";
    carrito.forEach((producto, index) => {
        resumen += `${index + 1}. Nombre: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}, Cantidad: ${producto.cantidad}, Subtotal: $${(producto.precio * producto.cantidad).toFixed(2)}\n`;
    });
    resumen += `Total de tu compra: $${total.toFixed(2)}`;
    alert(resumen);
    console.log(resumen);
}

// Función para iniciar el simulador de la tienda
function iniciarTienda() {
    let opcion;
    do {
        opcion = prompt(`Seleccione una opción:
1. Añadir producto al carrito
2. Calcular total del carrito
3. Buscar producto en el carrito
4. Filtrar productos por precio
5. Mostrar resumen del carrito
6. Salir`);

        switch (opcion) {
            case '1':
                let producto = capturarProducto();
                agregarProductoAlCarrito(producto);
                alert("Producto añadido al carrito.");
                break;
            case '2':
                let total = calcularTotal();
                alert("El total de tu compra es: $" + total.toFixed(2));
                break;
            case '3':
                let nombreProducto = prompt("Introduce el nombre del producto a buscar:");
                let productoEncontrado = buscarProducto(nombreProducto);
                if (productoEncontrado) {
                    alert(`Producto encontrado: ${productoEncontrado.nombre}, Precio: $${productoEncontrado.precio.toFixed(2)}, Cantidad: ${productoEncontrado.cantidad}`);
                    console.log(`Producto encontrado: ${productoEncontrado.nombre}, Precio: $${productoEncontrado.precio.toFixed(2)}, Cantidad: ${productoEncontrado.cantidad}`);
                } else {
                    alert("Producto no encontrado.");
                    console.log("Producto no encontrado.");
                }
                break;
            case '4':
                let precioMinimo = parseFloat(prompt("Introduce el precio mínimo para filtrar productos:"));
                let productosFiltrados = filtrarProductosPorPrecio(precioMinimo);
                if (productosFiltrados.length > 0) {
                    let filtroResultado = `Productos con precio mayor a $${precioMinimo.toFixed(2)}:\n`;
                    productosFiltrados.forEach((producto, index) => {
                        filtroResultado += `${index + 1}. Nombre: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}, Cantidad: ${producto.cantidad}\n`;
                    });
                    alert(filtroResultado);
                    console.log(filtroResultado);
                } else {
                    alert("No hay productos con precio mayor a $" + precioMinimo.toFixed(2));
                    console.log("No hay productos con precio mayor a $" + precioMinimo.toFixed(2));
                }
                break;
            case '5':
                mostrarResumen();
                break;
            case '6':
                alert("Saliendo...");
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }
    } while (opcion !== '6');
}

// Iniciar la simulación de la tienda
iniciarTienda();