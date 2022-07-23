var mySring = "jonathan";
console.log(mySring) //=> jonathan

var strlength = mySring.length;
console.log(strlength) //=> 8

for( var i = 0; i < strlength; i++ ){ // i inicie en 0 hasta que termine en el valor de strlength que sume 1 
    console.log(mySring.charAt(i))  // imprima en pantalla (el myString.El_caracter(de la posicion de i))

    var character = mySring.charAt(i);
    console.log("la letra es "+character+ " y ocupa la posicion " + i +" / "+strlength)
    // string interpolation / interpolacion de texto 
    console.log(`la letra es ${character} y ocupa la posicion ${i+1} / ${strlength}`)
}

var phrase = "La mejor forma de predecir el futuro es creandolo"
var phrase2 = "La mejor formA de predecir el futuro es creándolo jÁ "

/*
-saber la cantidad de palabras
-saber la cantidad de "a"
-crear una nueva frase usando solo los caracteres que esten en posiciones pares
-crear una nueva frase usando solo los caracteres que esten en posiciones nones
*/

var strinlength = phrase.length

console.log("la cantidad de letras y espacios es "+phrase.length)
console.log(phrase.search("a"))//  --> 1
console.log(phrase.charAt(15))//  ---> d
console.log(`la cantidad de palabras es de ${phrase.split(" ").length}`)

//forma-1 con global
var amatches = phrase2.match(/[aAáÁ]/gi)
console.log("amatches 1",amatches.length)

//forma-1 con global + insentity gi
var amatches = phrase2.match(/[aá]/gi)
console.log("amatches 2",amatches.length)

//forma-2
var suma = 0
for(var i = 0 ; i < strinlength; i++ ){
if(phrase.charAt(i)==="a"){
    suma += 1;
    }
}
console.log("suma",suma);


var acumodd = "";
for(var i = 0 ; i < strinlength; i++ ){
    if(i%2 === 1){
        acumodd+=phrase.charAt(i);
        }
    }
    console.log(`la nueva frase es : ${acumodd}`)


    var acumpair = "";
for(var i = 0 ; i < strinlength; i++ ){
    if(i%2 === 0){
        acumpair+=phrase.charAt(i);
        }
    }
    console.log(`la nueva frase es : ${acumpair}`)


    /*
    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:
    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/

console.log("frase snake_case "+phrase.replace(/ /g,"_"))
console.log("frase kebab_case "+phrase.replace(/ /g,"-"))

console.log("Mostrar la misma frase con todas las vocales en mayúscula "+phrase.replace(/a|e|i|o|u/gi,function(change){
    return change.toUpperCase();
}))


var ten = phrase.charAt(0)
for(i=1;i<10;i++){
    ten += phrase.charAt(i)
}
console.log(ten)



var ten = phrase.charAt(48)
for(i=47;i>38;i--){
    ten += phrase.charAt(i)
}
console.log(ten)