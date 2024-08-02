//  Selección de elementos
const contenedorNotas = document.querySelector(".contenedor-notas");
const btnCrear = document.querySelector(".btn");
let notas = document.querySelectorAll(".input-box");


// Función para guardar las notas en el navegador
function mostrarNotas(){
    contenedorNotas.innerHTML = localStorage.getItem("notas")
}

mostrarNotas()

function actualizarAlmacenamiento(){

    /*localStorage.setItem(key, ): 
    - key: Sirve como ancla para obtener la información
    - valor: Información
    */

    localStorage.setItem("notas", contenedorNotas.innerHTML);

}


//  Funcionalidad de los Botones
btnCrear.addEventListener("click", function(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "img/delete.png";
    contenedorNotas.appendChild(inputBox).appendChild(img);
})


contenedorNotas.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        actualizarAlmacenamiento()
    }else if(e.target.tagName === "P"){
        notas = document.querySelectorAll(".input-box");
        notas.forEach(nt => {
            nt.onkeyup = function(){
                actualizarAlmacenamiento()
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
}
)
