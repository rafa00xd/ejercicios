//funcion
function pares(){
var numeros = [4, 4, 5, 1, 2, 5, 2, 7, 9, 3, 3, 2, 1, 6, 6, 7, 8, 9, 8, 4, 3, 9];    
console.log("Numeros impares")
for (i = 0; i < numeros.length; i++) {
    if (numeros[i]%2!=0){
        console.log(`${numeros[i]},`)
    }
      } 
 
   
}

pares();