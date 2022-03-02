import { Suma } from "./Suma.js";
import { Resta } from "./Resta.js";
import {Fahrenheit} from "./Fahren.js";
import {Multi} from "./Multiplicacion.js"
import {Divi}  from "./Divi.js"

let num1
let num2

let btnSuma = document.getElementById('Suma')
let btnResta = document.getElementById('Resta')
let btnF = document.getElementById('Fahrenheit')
let resultado = document.getElementById('Resultado')
let btnMulti = document.getElementById('Multi')
let btnDivi = document.getElementById('Divi')

function LeerDatos() {
     num1 = Number(prompt('Ingrese Número 1'))
     num2 = Number(prompt('Ingrese Número 2'))
}

btnSuma.addEventListener('click',()=>{
    LeerDatos()
    console.log(Suma(num1,num2))
    resultado.innerHTML =  ` La Suma es ${Suma(num1,num2)}`
})

btnResta.addEventListener('click',()=>{
    LeerDatos()
    console.log(Resta(num1,num2))
    resultado.innerHTML =  ` La Resta es ${Resta(num1,num2)}`
})

btnF.addEventListener('click', ()=>{
    let F = parseFloat(prompt('Ingrese grado F°'))
    console.log(Fahrenheit(F))
    resultado.innerHTML =  ` Los grados celsius son ${Fahrenheit(F)}`
})

btnMulti.addEventListener('click', () => {
    LeerDatos()
    console.log(Multi(num1,num2))
    console.log(`La Multiplicación es ${Multi(num1,num2)}`)
    resultado.innerHTML = `La Multiplicación es ${Multi(num1,num2)}`
})

btnDivi.addEventListener('click', () => {
    LeerDatos()
    console.log(Divi(num1,num2))
    console.log(`La División es ${Divi(num1,num2)}`)
    resultado.innerHTML = `La División es ${Divi(num1,num2)}`
})