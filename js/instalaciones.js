const inputNombre = localStorage.getItem("nombre")
const inputCorreo = localStorage.getItem("correo")
const inputLocalidad = localStorage.getItem("localidad")
const inputInstalacion = localStorage.getItem("instalacion")


document.querySelector("#nombre").innerHTML = "Nombre:  " + inputNombre
document.querySelector("#correo").innerHTML = "Correo:  " + inputCorreo
document.querySelector("#localidad").innerHTML = "Localidad:  " + inputLocalidad
document.querySelector("#instalacion").innerHTML = "Instalacion:  " + inputInstalacion