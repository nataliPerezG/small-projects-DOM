
// Variable global:



let count = 1;
// Elementos desde el html
const form = document.querySelector("#form");
const input = document.querySelector(".input");
const button = document.querySelector(".button")
const lista = document.querySelector(".lista");
const template = document.querySelector("#template").content
const h4 = document.createElement("h4");

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

  // let tarea = clone.querySelector(".tarea")
  // tarea.dataset.num = count++

  texto.textContent = `${valorTarea}`;
  lista.append(clone);

  mostrarMensaje();
  addEvents(eliminar);

}


function mostrarMensaje() {

  (!lista.firstElementChild)
    ? h4.textContent = "SIN TAREAS"
    : h4.textContent = "TAREAS PENDIENTES";

  lista.before(h4)
}


function addEvents(elem) {

  elem.addEventListener("click", e => {
    let valorTarea = elem.parentElement.parentElement;
    valorTarea.remove();
    mostrarMensaje()
  })

}


// Listener:

form.addEventListener("submit", modificarContenido);

mostrarMensaje();
