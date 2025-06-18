// Elementos del html:

let input = document.getElementById("input");
let boton = document.getElementById("btn");
let contLista = document.querySelector(".containerList");


// Variables:
let tareas = [
  /*   {
      name: "uno",
      date: "10-11-2025",
    },
    {
      name: "dos",
      date: "10-11-2025",
    }, */
];

// funciones:

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    obtenerTarea()
  }
})


const mostrarTarea = () => {

  let contenido = "";

  tareas.forEach((item, index) => {

    let { name, date } = item;

    let parrafo = `
          <div class="list">
        <p>${name} <span> ${date} </span> </p>
        <button class="delete">Borrar</button>
      </div>`
    contenido += parrafo;
  })

  contLista.innerHTML = contenido;

  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      tareas.splice(index, 1);
      mostrarTarea()
    })
  })

}

const obtenerTarea = () => {

  let date = document.getElementById("date");
  name = input.value;
  date = date.value;

  tareas.push({
    name,
    date
  });
  input.value = "";
  input.focus();

  mostrarTarea();

}

btn.addEventListener("click", obtenerTarea);

