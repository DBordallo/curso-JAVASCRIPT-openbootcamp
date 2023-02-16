const boton = document.getElementById('btn');

console.log(boton);

boton?.addEventListener("click", () => {
    alert("click en el botón");
    })
    

$(() => {

$(".btn").click(() => {
    console.log("Hola, estoy utilizando jQuery")
})

})



