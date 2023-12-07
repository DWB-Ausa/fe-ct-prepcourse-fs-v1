/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   // utilizo Object.entries para convertir el objeto {clave: valor} en una array de pares ['clave',valor].
   const arregloDeArreglos = Object.entries(objeto);
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   //creo un object para  guardar las letras y la cantidad que se repiten
   const letras = {};

   //uso for para recorrer el string y chequear las letras
   for (let i = 0; i < string.length; i++) {

      //letra actual em posicion [i]
      const letraActual = string[i];

      //verifico si se guardo esa "letraActual" en el object "letras", si ya se guardó suma +1 la cantidad de veces que se encontró, de lo contrario guarda la nueva letra
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
   //luego utilizo el .sort() para ordenarlos alfabeticamente, si son letras, o en orden creciente si son numeros
   //luego utilizo .forEach() para construir un nuevo objeto "letrasOrdenadas" con las letras ordenadas y sus respectivas cantidades
   Object.keys(letras).sort().forEach(letra => {
      letrasOrdenadas[letra] = letras[letra];
   });

   return letrasOrdenadas;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   //creo 2 variables vacias de tipo string, uno para mayusculus y otro para minusculas
   let mayusculas = '';
   let minusculas = '';

   for (let i = 0; i < string.length; i++) {

      //creo una variable "letra" temporal para guardar cada letra temporal
      const letra = string[i];

      if (letra === letra.toUpperCase()) {
         mayusculas += letra;
      }
      else {
         minusculas += letra;
      }
   }

   // creo nueva variable para guardar primero las "mayusculas" + "minusculas"
   let nuevaPalabra = mayusculas + minusculas;

   return nuevaPalabra;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

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

   return fraseInvertida;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   // convierto en string el numero recibido
   const numeroAString = numero.toString();

   // creo un array "numeroAlReves" para guardar el numero al revez
   // utilizo .split('') sin espacio, para dividir el string en un array de numeros separados
   // utilizo .reverse() para invertir cada numero del array
   // utilizo .join('') para volver a unir los numeros en un array de numeros
   const numeroAlReves = numeroAString.split('').reverse().join('');

   // verifico si numeroAlReves es igual a numeroAString
   if (numeroAlReves === numeroAString) {
      return "Es capicua";
   }
   else {
      console.log("No es capicua");
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let palabraNueva = '';

   for (let i = 0; i < string.length; i++) {

      // creo una letra temporal
      const letraTemporal = string[i];

      if (letraTemporal === "a" || letraTemporal === "b"|| letraTemporal === "c") {
         continue;
      }
      else{
         palabraNueva += letraTemporal;
      }     
   }
   return palabraNueva;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   // creo una copia del arrayOfStrings
   const palabrasOrdenadas = arrayOfStrings;

   // utilizo .sort() con la función de comparación de longitud de cada cadena de strings
   // resta la longitud de una palabra (a) de la longitud de otra palabra (b).
   // Si el resultado es negativo, significa que a es más corta que b.
   // Si es cero, ambas palabras tienen la misma longitud. 
   // Y si es positivo, significa que a es más larga que b. Esto es lo que le dice a .sort() cómo ordenar el array de strings de menor longitud a mayor longitud.
   return palabrasOrdenadas.sort((a, b) => a.length - b.length);

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   // creo nuevo array para guardar los que coinciden
   // utilizo la función dentro de .filter() para verificar si cada numero de "array1" está incluido en "array2" utilizando el método .includes ()
   // Si no conincide ningun numero, el array resultante "arrayCoincide" estara vacío.
   const arrayCoincide = array1.filter(numero =>
      array2.includes(numero));

   return arrayCoincide;

   }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
