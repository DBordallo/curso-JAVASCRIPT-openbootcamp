

var nombre = "Diego"
var apellido = "Bordallo"

const persona = {
    nombre: "Diego",
    apellido: "Bordallo"
}

localStorage.setItem('Diego', 'Bordallo')
sessionStorage.setItem('Diego', 'Bordallo')

document.cookie = "nombre=Diego"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date().toUTCString()