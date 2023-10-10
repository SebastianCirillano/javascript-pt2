

//LLAMAR A LA FUNCION//


const solicitudPrestamo = function (nombre, monto, fecha) {
    this.nombre = nombre;
    this.monto = monto;
    this.fecha = fecha;
}


let solicitud1 = new solicitudPrestamo('Juan', 150000, new Date('2023-06-10'));
let solicitud2 = new solicitudPrestamo('Mario', 120000, new Date('2023-02-15'));
let solicitud3 = new solicitudPrestamo('Lucas', 1500000, new Date('2023-10-01'));
let solicitud4 = new solicitudPrestamo('Carla', 800000, new Date('2023-08-25'));
let solicitud5 = new solicitudPrestamo('Micaela', 220000, new Date('2023-09-20'));
let solicitud6 = new solicitudPrestamo('Fabricio', 450000, new Date('2023-10-05'));

let solicitantes = [solicitud1,solicitud2,solicitud3,solicitud4,solicitud5,solicitud6]

function filtrarMonto(){
    let montoDeseado = parseFloat(prompt("ingrese monto minimo que desea ver"))
    let resultado = solicitantes.filter(solicitud => solicitud.monto >= montoDeseado);

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        console.log("No se encontraron solicitudes que cumplan con el monto mínimo.");
    }
}



function filtrarPorFecha() {
    let fechaDeseada = new Date(prompt("Ingrese la fecha en formato AAAA-MM-DD para filtrar"));
    let resultado = solicitantes.filter(solicitud => solicitud.fecha >= fechaDeseada);

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        console.log("No se encontraron solicitudes para la fecha especificada.");
    }
}


function agregarSolicitante(){
    let nombre = prompt("Ingrese el nombre del solicitante:").trim();
    let monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
    let fecha = new Date(prompt("Ingrese la fecha de la solicitud en formato AAAA-MM-DD:"));

    if(isNaN(monto) || nombre==="" || isNaN(fecha.getTime())) {
        alert("por favor, ingresar datos validos")
        return;
    }

    let nuevoSolicitante = new solicitudPrestamo(nombre,monto,fecha);

    solicitantes.push(nuevoSolicitante)
    console.table(solicitantes)

}