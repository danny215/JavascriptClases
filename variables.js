console.log('hola mundo');

var nombre = 'Danny';
var edad = 28;
var peso = 305.1;
var casado = false;
var fechaNacimiemnto = new Date();
var NoExisto = null;
var noEstoyDefinido = undefined;
var numero = 1;
var numer2 = 0;
var numero3 = -1;
//cmd+a=seleccionar todo
//cmd+alt+l=identar
if (numero) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}


//Json
var usuario = {
    "nombre": "Danny",
    apellido: "Alvarez",
    cedula: 'Dann',
    edad: 22,
    imprimir: function() {
        console.log(this.nombre + '' + this.apellido + '' + this.edad);
    }
};



console.log(usuario.nombre);//"Danny"
console.log(usuario);

delete usuario.edad;
console.log(usuario);

usuario.fechaNacimiento = new Date();
console.log(usuario);

usuario.mascotas = {};
usuario.mascotas.nombre = "Danny";
console.log(usuario);

var arreglo = [1, "Danny", true, undefined, null, new Date(), [1, 2, 3, true]];
console.log(arreglo);

function sumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarNumeros(1, 2));
console.log(sumarNumeros(1, 2.223));

var potenciaDeDosNumeros = function (numero) {

};

console.log(potenciaDeDosNumeros(1, 2, 3, 4, 5));
usuario.imprimir();