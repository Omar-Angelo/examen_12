const input = document.getElementById("input");
const table = document.getElementById("tabla");
const boton = document.getElementById("boton");




boton.addEventListener("click", agregarTarea);

function agregarTarea() {
  const fila = document.createElement("tr");

  fila.innerHTML = `
                    <td> <input type="checkbox" onClick="completar()" /> </td>
                    <td style="flex-grow: 2"> ${input.value} </td>
                    <td> <button onClick="borrar()"> X </button> </td>
                    `;

  tabla.appendChild(fila);
}


  function borrar(){
    this.event.target.parentElement.parentElement.remove();
  }

  function completar(event) {
    if (this.event.target.checked) {
      this.event.target.parentElement.parentElement.classList.add("completado");
    } else {
      this.event.target.parentElement.parentElement.classList.remove("completado");
    }
  }
   
