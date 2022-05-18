document.getElementById("display").value = 0;
var cantidad = "";
var sumatoria = 0;
var sumar = false;
var restar = false;
var multiplicar = false;
var multiplicaciones = 0;
var divisiones = false;
var divisionar = 0;
var senos = false;
var senon = 0;
var cosenon = false;
var cosenos = 0;
var tangentes = 0;
var tangenten = false;
var restario = 0;
var multiplicario = 0;
var divisionario = 0;
var Contador = 0;


function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function Borrar(Borrar) {
    document.getElementById("display");
    location.reload()
}

function suma() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
}

function resta() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
}

function multiplicacion() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
}

function division() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    divisiones = true;
}

function seno() {
    sumatoria = sumatoria + parseInt(cantidad);
    document.getElementById("display").value = sen;
    cantidad = "";
    senos = true;
}


function coseno() {
    sumatoria = (cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    cosenon = true;
}

function seno() {
    sumatoria = (cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    senon = true;
}

function tangente() {
    sumatoria = (cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    tangenten = true;
}

function Igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad)
    }
    if (restar == true) {
        document.getElementById("display").value = sumatoria - parseInt(cantidad)
    }
    if (multiplicar == true) {
        document.getElementById("display").value = sumatoria * parseFloat(cantidad)
    }
    if (divisiones == true) {
        document.getElementById("display").value = sumatoria / parseFloat(cantidad)
    }
    if (cosenon == true) {
        document.getElementById("display").value = Math.cos(cantidad * Math.PI / 180)
    }
    if (senon == true) {
        document.getElementById("display").value = Math.sin(cantidad * Math.PI / 180);

    }
    if (tangenten == true) {
        document.getElementById("display").value = Math.tan(cantidad * Math.PI / 180);

    }
}