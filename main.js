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

let solicitantes = [solicitud1, solicitud2, solicitud3, solicitud4, solicitud5, solicitud6]

if (localStorage.getItem("solicitudes")) {  //anda al localstorage y traeme la key productos
    solicitantes = JSON.parse(localStorage.getItem("solicitudes")); //parseame todo y metelo en la lista
    } else {
    solicitantes = solicitantes  //si no hay nada, la lista es igual a la lista de siempre
    }

//relaciono los botones filtrar y agregar //

const filtrarBtn = document.getElementById("filtrar");
filtrarBtn.addEventListener("click", () => { filtrarSolicitante(); });

const agregarBtn = document.getElementById("agregar");
agregarBtn.addEventListener("click", () => { agregarSolicitante(); });


// funcion filtrar solicitudes//

function filtrarSolicitante() {
    const body = document.querySelector('body');
    const input = document.getElementById('filtrarP').value
    const palabraClave = input.trim().toUpperCase();
    const resultado = solicitantes.filter((solicitud) => solicitud.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0) {
        const container = document.createElement('div');
        container.classList.add('card-container');

        resultado.forEach((solicitante) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const nombre = document.createElement('h2');
            nombre.textContent = solicitante.nombre;
            card.appendChild(nombre);

            const monto = document.createElement('p');
            monto.textContent = `Monto: ${solicitante.monto}`;
            card.appendChild(monto);

            const fecha = document.createElement('p');
            fecha.textContent = `Fecha: ${solicitante.fecha.toDateString()}`;
            card.appendChild(fecha);

            container.appendChild(card);
        });

        body.appendChild(container);
    } else {
        alert('No se encontró ningún solicitante que coincida con la búsqueda.');
    }
}

// funcion agregar solicitud //


function agregarSolicitante() {
    const form = document.createElement('form');
    form.innerHTML = `
      <label for="nombre-input">Nombre:</label>
      <input id="nombre-input" type="text" required>
      
      <label for="monto-input">Monto:</label>
      <input id="monto-input" type="number" step="0.01" required>
      
      <label for="fecha-input">Fecha:</label>
      <input id="fecha-input" type="date" required>

      <button type="submit">Agregar</button>`;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombreInput = document.getElementById('nombre-input').value.trim();
        const montoInput = parseFloat(document.getElementById('monto-input').value);
        const fechaInput = new Date(document.getElementById('fecha-input').value);

        if (isNaN(montoInput) || nombreInput === '') {
            alert('Por favor ingresa valores válidos en los campos.');
            return;
        }

        const solicitudNueva = new solicitudPrestamo(nombreInput, montoInput, fechaInput);

        if (solicitantes.some((elemento) => elemento.nombre === nombreInput)) {
            alert('El solicitante ya existe en la lista.');
            return;
        }

        solicitantes.push(solicitudNueva);

        localStorage.setItem("solicitudes", JSON.stringify(solicitantes));

        alert(`Se agrego a ${nombreInput} como nuevo solicitante.`);

        console.table(solicitantes); 

    });
    document.body.appendChild(form);


}

