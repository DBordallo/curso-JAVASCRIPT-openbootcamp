class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenDatos () {
        console.log(`El estudiante es ${this.nombre}, y sus asignaturas son ${this.asignaturas}.`)
    }
}

const nuevo_estudiante = new Estudiante("Diego", "Javascript, HTML, CSS")
console.log(nuevo_estudiante)
nuevo_estudiante.obtenDatos()

let Estudiante_2 = new Estudiante("Oscar", "Javascript")
Estudiante_2.obtenDatos()
