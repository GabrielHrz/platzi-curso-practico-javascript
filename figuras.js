console.group("Cuadrados");
/*const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");*/

function perimetroCuadrado(lado) {  
    return lado * 4;
}


//console.log("El perimetro del cuadrado es :" + perimetroCuadrado + "cm");

//const AreaCuadrada = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {  
    return lado * lado;
}

//console.log("El area de un cuadrado es :" + AreaCuadrada + "cm^2");
console.groupEnd();

//Codigo del triangulo
/*console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados del triangulo miden: " 
 + ladoTriangulo1 
 + "cm, " 
 + ladoTriangulo2 
 + "cm, " 
 + baseTriangulo 
 + "cm"
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es :" + alturaTriangulo + "cm");
*/
function perimetroTriangulo(lado1,lado2,base){
return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es :" + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
 return (base * altura) / 2;

}
//console.log("La area del triangulo es :" + areaTriangulo + "cm^2");



console.groupEnd();

console.group("Circulos");


//La primera es el radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");


//Diametro
function diametroCirculo(radio){
   return radio * 2; 
} 
//console.log("El diametro del circulo es: " +diametroCirculo + "cm");


//PI
const PI = Math.PI;
console.log("El valor de pi es: " + PI);

//Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
    
}
//console.log("El perimetro del cirulo es: " + perimetroCirculo + "cm");
//Area
function areaCirculo (radio){

return (radio * radio) * PI;

} 
//console.log("el area del circulo es " + areaCirculo + "cm^2");


console.groupEnd();

//Interactuar con html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert('El resultado es' + perimetro);

    
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert('El resultado es ' + area + "cm");

}
const calculAltura = function (a, b, c) {
    let A;
    if(a > b && b === c && a >= 2*b || b > a && a === c && b >= 2*a || c > a && a === b && c >= 2*a) {
        alert('Valores fuera de lo real');
    } else if(a > b && a === c || a < b && a === c) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(b/2, 2));
        return A;
    } else if(a > c && a === b || a < c && a === b) {
        A = Math.sqrt(Math.pow(a,2) - Math.pow(c/2, 2));
        return A;
    } else if(b > a && b === c || b < a && b === c) {
        A = Math.sqrt(Math.pow(b,2) - Math.pow(a/2, 2));
        return A;
    } else {
        alert('El triangulo no es Isósceles');
    }
}   