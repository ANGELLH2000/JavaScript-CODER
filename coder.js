// Función para calcular la edad promedio
function calcularPromedioEdades(edades) {
    // Verifica si el arreglo no está vacío
    if (edades.length === 0) {
        return "No se proporcionaron edades.";
    }

    let suma = 0;

    // Recorre el arreglo para calcular la suma de las edades
    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];
    }

    // Calcula el promedio
    let promedio = suma / edades.length;

    return promedio;
}

// Función para pedir edades al usuario
function pedirEdades() {
    let edades = [];
    let cantidadEdades;

    // Pide el número de edades a ingresar y valida que sea un número entero positivo
    do {
        cantidadEdades = parseInt(prompt("¿Cuántas edades vas a ingresar?"));
    } while (isNaN(cantidadEdades) || cantidadEdades <= 0);

    // Pide cada edad y valida que sea un número entero positivo
    for (let i = 0; i < cantidadEdades; i++) {
        let edad;
        do {
            edad = parseInt(prompt("Ingresa la edad #" + (i + 1)));
        } while (isNaN(edad) || edad <= 0);
        edades.push(edad);
    }

    return edades;
}

// Función principal para ejecutar el cálculo
function main() {
    // Pide las edades al usuario
    const edades = pedirEdades();

    // Llama a la función para calcular el promedio
    const promedioEdades = calcularPromedioEdades(edades);

    // Muestra el resultado en la consola
    console.log("La edad promedio es: " + promedioEdades);
}

// Ejecuta la función principal

main();