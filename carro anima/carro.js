var fondo = document.querySelector(".container")
var llanta1 = document.querySelector(".llantas")
var llanta2 = document.querySelector(".llanta")
var luces = document.querySelector(".luce")
var polvo = document.querySelector(".polvo")

fondo.addEventListener('click', animarTodo)

function animarTodo(){
  fondo.classList.add('fondomover')
  llanta1.classList.add('llantasmover')
  llanta2.classList.add('llantamover')
  luces.classList.add('lucesmover')
  polvo.classList.add('polvomover')
  luces.classList.remove('oculto')
  polvo.classList.remove('oculto')

}