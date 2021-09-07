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

    const perimetro = perimetroCuadrado(value) + " cm";
    document.getElementById('resultadoCuadradoPerimetro').innerHTML = perimetro;
    document.getElementById('resultadoCuadradoPerimetro').style.color = 'red';
}

function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const area = areaCuadrado(value) + "cm²";
    document.getElementById('resultadoCuadradoArea').innerHTML = area;
    document.getElementById('resultadoCuadradoArea').style.color = 'red';
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
    document.getElementById('resultadoTrianguloPerimetro').innerHTML = perimetro + " cm";
    document.getElementById('resultadoTrianguloPerimetro').style.color = 'blue';
}

function calcularAreaTriangulo() {
    const lado = document.getElementById("lado1_triangulo")
    const value_lado = Number(lado.value);
    const altura = document.getElementById("altura_triangulo");
    const value_altura = altura.value;


    if (value_altura == "") {
        document.getElementById('resultadoTrianguloArea').innerHTML = "No se encontro la altura para el calculo";
        document.getElementById('resultadoTrianguloArea').style.color = 'blue';
    }else{
        const area = areaTriangulo(value_altura, value_lado);
        document.getElementById('resultadoTrianguloArea').innerHTML = area + " cm²";
        document.getElementById('resultadoTrianguloArea').style.color = 'blue';
    }
}

function calcularAlturaTriangulo() {
    const lado1 = document.getElementById("lado1_triangulo");
    const value_lado1 = Number(lado1.value);
    const lado2 = document.getElementById("lado2_triangulo");
    const value_lado2 = Number(lado2.value);
    const ladoBase = document.getElementById("ladoBase_triangulo");
    const value_ladoBase = Number(ladoBase.value);

    if (value_lado1 == value_lado2 && value_lado1 != value_ladoBase) {
        const altura = (Math.sqrt(value_lado1**2-(value_ladoBase/2)**2)).toFixed(2);
        document.getElementById('resultadoTrianguloAltura').innerHTML = altura + " cm";
        document.getElementById('resultadoTrianguloAltura').style.color = 'blue';
    }else {
        document.getElementById('resultadoTrianguloAltura').innerHTML = "No es un triangulo isosceles";
        document.getElementById('resultadoTrianguloAltura').style.color = 'blue';
    }
}


// Funciones del circulo
function calcularPerimetroCirculo() {
    const radio = document.getElementById("radioCirculo");
    const value_radio = radio.value;

    const perimetro = perimetroCirculo(value_radio);
    document.getElementById('resultadoCirculoPerimetro').innerHTML = perimetro + " cm";
    document.getElementById('resultadoCirculoPerimetro').style.color = 'yellow';
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radioCirculo");
    const value_radio = radio.value;

    const area = areaCirculo(value_radio);
    document.getElementById('resultadoCirculoArea').innerHTML = area + " cm²";
    document.getElementById('resultadoCirculoArea').style.color = 'yellow';
}

function container(elemento) {
    var id = elemento.id;
    alert(id);
    if (id == "sectionCuadrado") {
        document.getElementById("section__cuadrado").style.display = 'block';
        document.getElementById("section__triangulo").style.visibility = "hidden";
        document.getElementById("section__circulo").style.visibility = "hidden";
    }
};