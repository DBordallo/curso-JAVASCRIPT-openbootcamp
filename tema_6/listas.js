let compra = ["peras", "naranjas", "pasta", "atun", "tomate"]
console.log(compra)

compra.push("aceite de girasol")
console.log(compra)

compra.pop()
console.log(compra)

const listaPeliculas = [
    {titulo: "Avatar", director: "James Cameron", fecha: 2009},
    {titulo: "Joker", director: "Todd Phillips", fecha: 2019},
    {titulo: "Pulp Fiction", director: "Quentin Tarantino", fecha: 1994}
]

const pelicula = listaPeliculas.filter(obj => {
    if (obj.fecha > 2010) {
        return true
    } else {
        return false
    }
})
console.log(pelicula)

const titulosPeliculas = listaPeliculas.map(pelicula => pelicula.titulo)
console.log(titulosPeliculas)

const directorPelicula = listaPeliculas.map(pelicula => pelicula.director)
console.log(directorPelicula)


const directorTitulo = directorPelicula.concat(titulosPeliculas)
console.log(directorTitulo)

const directorTitulo2 = [...directorPelicula, ... titulosPeliculas]
console.log(directorTitulo2)
