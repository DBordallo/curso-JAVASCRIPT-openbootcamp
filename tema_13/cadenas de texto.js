
let str = "Diego"
console.log(str)

let str_1 = "Bordallo"
console.log(str_1)

let estudiante = `${str} ${str_1}`
console.log(estudiante)

let estuduanteMayus = `${str} ${str_1}`
console.log(estuduanteMayus.toUpperCase())

let estudianteMinus = `${str} ${str_1}`
console.log(estudianteMinus.toLowerCase())

let numeroLetras = estudiante.length
console.log(numeroLetras)

let primeraLetra = str.charAt(0)
console.log(primeraLetra)

let ultimaLetra = str_1.slice(-1)
console.log(ultimaLetra)

let sinEspacios = estudiante.replace(/ /g, "")
console.log(sinEspacios)

console.log(estudiante.includes(str))