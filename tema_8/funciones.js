
//Una función sin parámetros que devuelva siempre "true"
function verdad() {
    return "true"
}

const cierto = verdad();
console.log(cierto)


//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000);

console.log("setTimeout() Ejemplo...");



//Una función generadora de índices pares automáticos
function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id >= Infinity) {
            return (id)
        }
        yield id*2
    }
}

const gen = generaId();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())