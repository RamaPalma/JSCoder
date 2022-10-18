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
                        </tr>`
                        tabla.innerHTML += fila
        });
}
traigoInstalaciones()
