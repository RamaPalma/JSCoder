let instalaciones = []
const nombre = document.querySelector("#form_nombre")
const correo = document.querySelector("#form_correo")
const localidad = document.querySelector("#form_select_localidad")
const instalacion = document.querySelector("#form_select_instalacion")
const btn = document.querySelector('#button');
const serviceID = 'default_service';
const templateID = 'template_af1h1rp';
const enviado = ()=> {

    Swal.fire({
        icon: 'success',
        title: 'Formulario enviado',
        background: '#1e1e1e',
        showConfirmButton: false,
        timer: 2500,
        iconColor: '#dd5d1c',
        
    }) 

}
const form = document.querySelector("form")
form = form.addEventListener("submit",correrPrograma)


function correrPrograma(e){
    e.preventDefault()
    traerInstalaciones()
    agregarInstalaciones()

    btn.value = 'ENVIANDO';
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    
    btn.value = 'ENVIAR FORMULARIO';
    }, (err) => {
        btn.value = 'ENVIAR FORMULARIO';
        alert(JSON.stringify(err));
    });

    enviado()
}

function agregarInstalaciones() {
    const option_instalacion = instalacion.options[instalacion.selectedIndex].value
    const option_localidad = localidad.options[localidad.selectedIndex].value
    let final = calcularCuotas().toFixed(2)

    var id = instalaciones.length

    instalaciones.push({id : id, nombre: nombre.value, correo: correo.value, localidad: option_localidad, instalacion: option_instalacion, coste: final})
    localStorage.setItem("instalaciones", JSON.stringify(instalaciones))
    
}

function traerInstalaciones() {
    if (localStorage.getItem("instalaciones")) {
        instalaciones = JSON.parse(localStorage.getItem("instalaciones"))
    }
}



function calcularCuotas(){
    let costo = 0
    const option_localidad = localidad.options[localidad.selectedIndex].value
    const option_instalacion = instalacion.options[instalacion.selectedIndex].value
    
    if(option_instalacion == "Instalacion camaras"){
        costo = 300
    }
    if(option_instalacion == "Instalacion alarmas"){
        costo = 500
    }
    if(option_instalacion == "Instalacion camaras y alarmas"){
        costo = 800
    }
    if(option_localidad == "banfield"){
        costo = costo + 100
    }
    if(option_localidad == "lomas de zamora"){
        costo = costo + 200
    }
    if(option_localidad == "lanus"){
        costo = costo + 300
    }
    if(option_localidad == "avellaneda"){
        costo = costo + 500
    }
    if(option_localidad == "caba"){
        costo = costo + 800
        }
    
    let costoFinal = 0
    let cuotas = (costo/12)

    for (let i = 0; i <12 ; i++){
        cuotas = cuotas + (cuotas * 0.03)
        costoFinal = costoFinal + cuotas
        
    }

    return costoFinal

}



