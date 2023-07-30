/*
Description: Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted
 in non-decreasing order.
*/

//Solution 01

// O(n log(n)) time -> we need to sort our output array
// O(n) space -> we need to generate a brand new data structure

function sortedSquaredArray(array) {
    //create a new array with the same length of array, and inicialize to 0
    const sortedSquares = new Array(array.length).fill(0);
    for(let i=0; i<array.length; i++) {
        const value = array[i];
        sortedSquares[i] = value * value;
    }

    sortedSquares.sort((a, b) => a - b);
    return sortedSquares;
}

//Solution 02


// O(n) time -> we need to walk throught our array once
// O(n) space -> we need to generate a brand new data structure 

function sortedSquaredArray(array) {
    const sortedSquared = new Array(array.length).fill(0);
    let leftIndex = 0;
    let rigthIndex = array.length - 1;
    
    for(let count = array.length -1; count>=0; count--){
      const leftValue = array[leftIndex];
      const rigthValue = array[rigthIndex];
      //o lado esquerdo incrementa par a o lado direito a medida que ele for maior que o da direita
      if(Math.abs(leftValue) > Math.abs(rigthValue)) {
        sortedSquared[count] = leftValue * leftValue;
        leftIndex++;
      }else {
        //se o da direita for maior, ele vai calcular seu quadrado e decrementar pra ir pro prox caso
        sortedSquared[count] = rigthValue * rigthValue;
        rigthIndex--;
      }
    }
    
    return sortedSquared;
}

  



  
  