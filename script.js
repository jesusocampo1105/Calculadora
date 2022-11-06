//Declaramos variables
let operandoa;
let operandob;
let operacion;

//Creamos variables y con "querySelector" llamamos la clase y la almacenamos en la variable
const cero = document.querySelector(".cero");
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro");
const cimco = document.querySelector(".cinco");
const seis = document.querySelector(".seis");
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho");
const nueve = document.querySelector(".nueve");
let resultado = document.querySelector(".resultado");
const ac = document.querySelector(".ac");
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const multiplicacion = document.querySelector(".multiplicacion");
const division = document.querySelector(".division");
const igual = document.querySelector(".igual");
const punto = document.querySelector(".punto");



// Con el metodo "addEventListener" escucho cuando el usuario de click y realiza una función
cero.addEventListener("click", clicCero);
uno.addEventListener("click", clicUno);
dos.addEventListener("click", clicDos);
tres.addEventListener("click", clicTres);
cuatro.addEventListener("click", clicCuatro);
cimco.addEventListener("click", clicCinco);
seis.addEventListener("click", clicSeis);
siete.addEventListener("click", clicSiete);
ocho.addEventListener("click", clicOcho);
nueve.addEventListener("click", clicNueve);
ac.addEventListener("click", borrar);
suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
multiplicacion.addEventListener("click", multiplicar);
division.addEventListener("click", dividir);
igual.addEventListener("click", result);
punto.addEventListener("click", point);

//Con el evento de click, realizamos la funcion, con el metodo "textContent" agregamos texto
function clicCero(){
    resultado.textContent = resultado.textContent + "0";
}
function clicUno(){
    resultado.textContent = resultado.textContent + "1";
}
function clicDos(){
    resultado.textContent = resultado.textContent + "2";
}
function clicTres(){
    resultado.textContent = resultado.textContent + "3";
}
function clicCuatro(){
    resultado.textContent = resultado.textContent + "4";
}
function clicCinco(){
    resultado.textContent = resultado.textContent + "5";
}
function clicSeis(){
    resultado.textContent = resultado.textContent + "6";
}
function clicSiete(){
    resultado.textContent = resultado.textContent + "7";
}
function clicOcho(){
    resultado.textContent = resultado.textContent + "8";
}
function clicNueve(){
    resultado.textContent = resultado.textContent + "9";
}
function point(){
    resultado.textContent = resultado.textContent + ".";
} 
function borrar(){
    resultado.textContent = resultado.textContent - resultado.textContent;
}
function sumar(){
    operandoa = resultado.textContent;
      operacion = "+";
      resultado.textContent = "";
}
function restar(){
    operandoa = resultado.textContent;
      operacion = "-";
      resultado.textContent = "";
}
function multiplicar(){
    operandoa = resultado.textContent;
      operacion = "*";
      resultado.textContent = "";
}
function dividir(){
    operandoa = resultado.textContent;
      operacion = "/";
      resultado.textContent = "";
}
function result(){
    operandob = resultado.textContent;
    resolver();
}

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resultado.textContent = "";
    resultado.textContent = res;
  }