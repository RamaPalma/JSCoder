

const nombre = document.querySelector("#form_nombre")
const correo = document.querySelector("#form_correo")
const localidad = document.querySelector("#form_select_localidad")
const instalacion = document.querySelector("#form_select_instalacion")
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

let costo = 0


function correrPrograma(e){
    e.preventDefault()
    enviado()
    const option_instalacion = instalacion.options[instalacion.selectedIndex].value
    const option_localidad = localidad.options[localidad.selectedIndex].value

    localStorage.setItem("nombre",nombre.value)
    localStorage.setItem("correo",correo.value)
    localStorage.setItem("localidad",option_localidad)
    localStorage.setItem("instalacion",option_instalacion)

    

}





function calcularCuotas(){
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



