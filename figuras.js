// Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}

console.groupEnd();

// Triangulo
console.group("Triangulo");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTrianguloBase) {
    return ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
}

function areaTriangulo(alturaTriangulo, ladoTrianguloBase) {
    return (alturaTriangulo * ladoTrianguloBase) / 2;
}
console.groupEnd();



// Codigo del circulo
console.group("Cirulo");

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}

const PI = Math.PI;

function perimetroCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo);
    return (diametro * PI).toFixed(2);
}

function areaCirculo(radioCirculo) {
    return ((radioCirculo * radioCirculo) * PI).toFixed(2);
}

console.groupEnd();


// -------------------------- Aqui interactuamos con HTML --------------------------------------

//Funciones del cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    document.getElementById('resultadoCuadrado').innerHTML = perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//funciones del triangulo
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1_triangulo");
    const value_lado1 = Number(lado1.value);
    const lado2 = document.getElementById("lado2_triangulo");
    const value_lado2 = Number(lado2.value);
    const ladoBase = document.getElementById("ladoBase_triangulo");
    const value_ladoBase = Number(ladoBase.value);

    const perimetro = perimetroTriangulo(value_lado1, value_lado2, value_ladoBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const lado = document.getElementById("lado1_triangulo")
    const value_lado = Number(lado.value);
    const altura = document.getElementById("altura_triangulo");
    const value_altura = altura.value;

    const area = areaTriangulo(value_altura, value_lado);
    alert("El area del triangulo es: " + area);
}


// Funciones del circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("radioCirculo");
    const value_radio = radio.value;

    const perimetro = perimetroCirculo(value_radio);
    alert("El perimetro del circulo es: " + perimetro); 
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radioCirculo");
    const value_radio = radio.value;

    const area = areaCirculo(value_radio);
    alert("El area del circulo es: " + area);
}