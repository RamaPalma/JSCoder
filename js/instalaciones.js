function eliminarInstalacion(id){
    let instalaciones = JSON.parse(localStorage.getItem("instalaciones"))
    instalaciones.splice(instalaciones.findIndex(a => a.id === id),1);
    localStorage.setItem("instalaciones",JSON.stringify(instalaciones))
    location.reload()
}


function traigoInstalaciones() {
    let instalaciones = JSON.parse(localStorage.getItem("instalaciones"))
    let tabla = document.querySelector("tbody")
        instalaciones.forEach(a => {
            let fila = `<tr>
                            <td>${a.nombre}</td>
                            <td>${a.correo}</td>
                            <td>${a.localidad}</td>
                            <td>${a.instalacion}</td>
                            <td>${a.coste}</td>
                            <td><button class="btn btn-dark" onclick="eliminarInstalacion(${a.id})">-</button></td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}
traigoInstalaciones()



