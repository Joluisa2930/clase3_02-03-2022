const matricula = 900000
let creditos, descuento, TotalM=0;

function LeerDatos() {
    creditos = Number(prompt('Ingrese cantidad de créditos'))
}

LeerDatos()
Calcular(creditos)

function Calcular(creditos) {
    if (creditos <= 6) {
        descuento = matricula * 0.5;
    }
    else if (creditos > 6 || creditos <= 10) {
        descuento = matricula * 0.25;
    }
    else if (creditos > 10) {
        descuento = 0;
    } else {
        alert('Valor no válido')

    }
    TotalM = matricula - descuento
    
}
console.log(TotalM)
alert("El valor de la matrícula es" , TotalM) 