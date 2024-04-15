let formulario = document.getElementById("formId"); // se agrego un id al formulario para su seleccion correcta
formulario.onsubmit = function(event) {

  event.preventDefault(); // se le cambio el prevent por un preventDefault para prevenir el comportamiento predeterminado del formulario //se le agrego el ; 
  
  let n = formulario.elements[0]; // cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
  let e = formulario.elements[1];// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
  let na = formulario.elements[2];// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 

  let nombre = n.value;// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
  let edad = e.value;// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 

  let i = na.selectedIndex;// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
  let nacionalidad = na.options[i].value;// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
  console.log(nombre, edad);//se le agrego el ; 
  console.log(nacionalidad);//se le agrego el ; 

  if (nombre.length === 0) {
    n.classList.add("error");//se le agrego el ; 
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");//se le agrego el ; 
  }

if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);//se le agrego el ; 
  }
}

let botonBorrar = document.createElement("button");//se le agrego el ; 
botonBorrar.textContent = "Eliminar invitado";//se le agrego el ; 
botonBorrar.id = "boton-borrar";//se le agrego el ; 
let corteLinea = document.createElement("br");//se le agrego el ; 
document.body.appendChild(corteLinea);//se le agrego el ; 
document.body.appendChild(botonBorrar);//se le agrego el ; 

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";//se le agrego el ; 
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";//se le agrego el ; 
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";//se le agrego el ; 
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";//se le agrego el ; 
  }

let lista = document.getElementById("lista-de-invitados");// cambie el tipo de la variable por let ya que se encontraba declarada como var y se le agrego el ; 

let elementoLista = document.createElement("div");// cambie el tipo de la variable por let ya que se encontraba declarada como var y se le agrego el ; 
elementoLista.classList.add("elemento-lista"); // se modifico la pabra added por add, ya que added no es una forma correcta del metodo classList y se le agrego el ; 
lista.appendChild(elementoLista); //se le agrego el ; 

let spanNombre = document.createElement("span");// cambie el tipo de la variable por let ya que se encontraba declarada como var 
let inputNombre = document.createElement("input");// cambie el tipo de la variable por let ya que se encontraba declarada como var 
let espacio = document.createElement("br");// cambie el tipo de la variable por let ya que se encontraba declarada como var 
//El siguiente bloque de codigo esta repetido en la funcion crearElemento 
/*spanNombre.textContent = "Nombre: "
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);//se le agrego el ; 
elementoLista.appendChild(inputNombre);//se le agrego el ; 
elementoLista.appendChild(espacio); //se le agrego el ; */  

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span");// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
let inputNombre = document.createElement("input");// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
let espacio = document.createElement("br");// cambie el tipo de la variable por let ya que se encontraba declarada como var //se le agrego el ; 
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor ;//se le agrego el ; 
elementoLista.appendChild(spanNombre);//se le agrego el ; 
elementoLista.appendChild(inputNombre);//se le agrego el ; 
elementoLista.appendChild(espacio);//se le agrego el ; 
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


let botonBorrar = document.createElement("button");// cambie el tipo de la variable por let ya que se encontraba declarada como var 
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br"); // cambie el tipo de la variable por let ya que se encontraba declarada como var 
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove();
  }
}