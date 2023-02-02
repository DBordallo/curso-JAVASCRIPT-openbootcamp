const obj = {
    nombre: "Diego",
    apellido: "Bordallo",
    edad: 37,
    altura: 178,
    eresDesarrollador: false,
}

var edad = obj.edad
console.log(edad)


const amigos = [
    {nombre: "Pedro", apellido:"García", edad:36, altura: 180, eresDesarrollador: false},
    {nombre: "Javier", apellido:"Perez", edad:39, altura: 175, eresDesarrollador: true}
]
amigos.push(obj)
console.log(amigos)

amigos.sort((a, b) => a.edad - b.edad)
console.log(amigos)