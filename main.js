

//LLAMAR A LA FUNCION//


const solicitudPrestamo = function(nombre,monto){
    this.nombre = nombre
    this.monto = monto
}


let solicitud1 = new solicitudPrestamo('Juan', 150000);
let solicitud2 = new solicitudPrestamo('Mario', 120000);
let solicitud3 = new solicitudPrestamo('Lucas', 1500000);
let solicitud4 = new solicitudPrestamo('Carla', 800000);
let solicitud5 = new solicitudPrestamo('Micaela', 220000);
let solicitud6 = new solicitudPrestamo('Fabricio', 450000);

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

function agregarSolicitante(){
    let nombre = prompt("Ingrese el nombre del solicitante:").trim();
    let monto = parseFloat(prompt("Ingrese el monto del préstamo:"));

    if(isNaN(monto) || nombre===""){
        alert("por favor, ingresar datos validos")
        return;
    }

    let nuevoSolicitante = new solicitudPrestamo(nombre,monto);

    solicitantes.push(nuevoSolicitante)
    console.table(solicitantes)

}