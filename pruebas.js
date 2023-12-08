var string = "asdfgsf"

const letras = {};

//uso for para recorrer el string y chequear las letras
for (let i = 0; i < string.length; i++) {

    //letra actual em posicion [i]
    const letraActual = string[i];

    //verifico si se guardo esa "letraActual" en el object "letras", si ya se guardó suma +1 la cantiodad de veces que se encontró, de lo contrario guarda la nueva letra
    if (letras[letraActual]) {
        letras[letraActual]++;
    }
    else {
        letras[letraActual] = 1;
    }
}

//creo otro object para ordenar las "claves" (clave:valor) del object "letras" y ponerlos alfabeticamente
const letrasOrdenadas = {};

//utilizo Object.keys() para obtener las "claves" (clave:valor) del object
//luego utilizo el .sort() para ordenarlos alfabeticamente, si son letras, o en orden creciente son numeros
//luego utilizo .forEach() para construir un nuevo objeto "letrasOrdenadas" con las letras ordenadas y sus respectivas cantidades
Object.keys(letras).sort().forEach(letra => {
    letrasOrdenadas[letra] = letras[letra];
});

/////////////////////////////////////////////////////

var frase = "Hola Cesar como estas!"

// creo una array para guardar las palabras separadas
// utilizo .split(' ') , con espacio, para dividir el string en un array de palabras separadas, si lo utilizo sin espacio creará el array de letras separadas y no de palabras separadas
const palabrasSeparadas = frase.split(' ');

// creo otro array para guardar los caracteres invertidos
const palabrasInvertidas = palabrasSeparadas.map(palabra => {

    // utilizo .split para dividir cada palabra en un array de caracteres [[ 'H', 'o', 'l', 'a' ], [ 'C', 'e', 's', 'a', 'r' ]]
    // utilizo .reverse() para invertir cada palabra del array [[ 'a', 'l', 'o', 'H' ], [ 'r', 'a', 's', 'e', 'C' ]]
    // utilizo .join('') para volver a unir las letras en un array de palabras , y no de letras [ 'aloH', 'raseC' ]
    return palabra.split('').reverse().join('');
});

//vuelvo a utilizar .join(' ') , con espacio, para unir las palabras del array en un STRING de frase normal
const fraseInvertida = palabrasInvertidas.join(' ');

//////////////////////////////////////

var numero = 12345654321;

const numeroAString = numero.toString();

// creo una variable para guardar el numero al revez
const numeroAlReves = numeroAString.split('').reverse().join('');

if (numeroAlReves === numeroAString) {
    console.log("Es capicua");
    /*     return "Es capicua"; */
}
else {
    console.log("No es capicua");
    /*   return "No es capicua"; */
}

////////////////////////////////////////////////

let palabravieja = "abeces";

let palabraNueva = '';

for (let i = 0; i < palabravieja.length; i++) {

    const letraTemp = palabravieja[i];

    if (letraTemp === "a" || letraTemp === "b" || letraTemp === "c") {
        continue;
    }
    else {
        palabraNueva += letraTemp;
    }
}
/* console.log(palabraNueva); */

/////////////////////////////////////
const strings = ['hola', 'cesar', 'como te va', 'estas']

let stringLargo = '';

for (let i = 0; i < strings.length; i++) {
    if (stringLargo.length < strings[i].length) {
        stringLargo = strings[i];
    }
}

console.log(stringLargo);

///////////////////////////////////////////////

var amigos = [{ nombre: 'toni', edad: 33 }, { nombre: 'Emi', edad: 25 }];

const amigoEncontrado = amigos.find(amigos => amigos.nombre === 'toni');

console.log(amigoEncontrado);

/////////////////////////////

var productos = [{ name: 'TV LCD', price: 100 }, { name: 'Computadora', price: 500 }];

function pluck(productos, propiedad) {

    const arrayDevuelto = productos.map(elemento =>
        elemento[propiedad]);

    return arrayDevuelto;
}

//////////////////////////////////////////
{ amigos: [{ nombre: 'toni', edad: 33}, { nombre: 'Emi', edad: 25}] }
