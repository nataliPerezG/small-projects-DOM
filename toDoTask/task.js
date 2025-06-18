

// Elementos desde el html
const form = document.querySelector("#form");
const input = document.querySelector(".input");
const button = document.querySelector(".button")
const lista = document.querySelector(".lista");
const template = document.querySelector("#template").content
const h4 = document.createElement("h4");
const stats = document.querySelector(".status")

// Función ppal:
function modificarContenido(e) {
  e.preventDefault();
  agregarTarea();
  this.reset();
}

// Funciones:
function agregarTarea() {

  if (!input.value) return

  let valorTarea = input.value;
  const clone = template.cloneNode(true);
  let texto = clone.querySelector(".texto");
  let eliminar = clone.querySelector(".eliminar")

  texto.textContent = valorTarea;
  lista.append(clone);

  console.log(lista.childElementCount)



  mostrarMensaje();
  updateStatus()
  addEvents(eliminar);
}



function mostrarMensaje() {

  (!lista.firstElementChild)
    ? h4.textContent = "SIN TAREAS"
    : h4.textContent = "TAREAS PENDIENTES";

  lista.before(h4)
}


let count = 1
function addEvents(elem) {
  elem.addEventListener("click", e => {
    let valorTarea = elem.parentElement.parentElement;
    valorTarea.remove();
    mostrarMensaje()
    updateStatus()
    let full = stats.querySelector(".full")
    console.log(full)
    full.textContent = count++
  })

}

function updateStatus() {

  let pend = stats.querySelector(".pend")
  pend.textContent = lista.childElementCount
  if (lista.firstElementChild) {
    stats.classList.remove("hidden")
  } else {
    stats.classList.add("hidden")
  }

}




// Listener:

form.addEventListener("submit", modificarContenido);

mostrarMensaje();
