//desafio 1
function verificarComida(arr) {
    let tieneComida = false;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "comida") {
        console.log("delicioso");
        tieneComida = true;
      }
    }
  
    if (!tieneComida) {
      console.log("Tengo hambre");
    }
  }
  
  const hungry = ["manzana", "pan", "comida", "uvas"];
  verificarComida(hungry);


//desafio 2
  function highPass(arr, cutoff) {
    var filteredArr = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
        filteredArr.push(arr[i]);
      }
    }
  
    return filteredArr;
  }
  
  var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
  console.log(result); // Debería mostrar [6, 8, 10, 9]

//desafio 3

function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum+= arr[i];
    }
    
    var average = sum / arr.length;

    var count = 0;

    for(var i = 0; i<arr.length; i++){
        if(arr[i]>average){
            count++
        }
    }

    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

//Desafio 4

function reverse(arr) {
   var reverseArray = [];
   for(var i = arr.length - 1; i >= 0; i--){
    reverseArray.push(arr[i]);
   }
    return reverseArray;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//Desafio 5

function fibonacciArray(n) {
    var fibArr = [0, 1];

    while (fibArr.length < n) {
        var nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(nextFib);
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);


