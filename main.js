const input = document.getElementById("input-original")
const rango = document.getElementById('rango')
const resultado = document.getElementById('resultado')
const output = document.getElementById('output')
const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let cifra = 10
let texto = ""
let indice = 0
console.log(alfabeto.indexOf("P"));

function Iniciar(){
    Rango();
    input.addEventListener("keydown", (e) => {
        
        if( alfabeto.find(letra => letra === e.key.toUpperCase()) != undefined){
           
            indice = alfabeto.indexOf(e.key.toUpperCase()) 
            output.innerText = `${cifra}`
            indice += cifra;
            
            if(indice >= alfabeto.length - 1){
            indice = indice -( alfabeto.length - 1)
            }
            resultado.innerHTML += ` ${alfabeto[indice].concat(" ")} `
        }
        Backspace(e.key) 
        Space(e.code)
    })
}
function Backspace(k){
     if(k === "Backspace"){
        texto = resultado.innerText;
        resultado.innerHTML = `
        ${texto.substring(0, texto.length - 1)}
        ` 
     }
}
function Space(code){
    texto = resultado.innerText
    code === "Space"
    ?
    resultado.innerText = texto.concat(" _ ")
    :
    ""
}
function Rango(){
    rango.addEventListener('click', (e) => {
         cifra = parseInt( e.target.value); 
    })
}
document.addEventListener("DOMContentLoaded", Iniciar())


