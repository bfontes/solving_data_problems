/*Description: 
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.
*/

//solution 01

// O(n) time ->the function iterates through the array once 
// O(1) space -> The function does not use any additional data structures that grow with the input size, so the space complexity is constant
function isValidSubsequence(array, sequence) {
    let arrayPointer =  0;
    let sequencePointer = 0;

    while (arrayPointer < array.length && sequencePointer < sequence.length) {
        if (array[arrayPointer] === sequence[sequencePointer]) {
            // If the current elements match, move both pointers
            arrayPointer++;
            sequencePointer++;
        } else {
            // If the elements don't match, move only the arrayPointer
            arrayPointer++;
        }
    }

    // After the loop, check if all elements in the sequence were found
    return sequencePointer === sequence.length;
}


//solution 02

// O(n) time ->the function iterates through the array once 
// O(1) space -> The function does not use any additional data structures that grow with the input size, so the space complexity is constant

function isValidSubsequence(array, sequence) {
    let sequencePointer = 0;
    for (let arrayPointer=0 ;arrayPointer<array.length;arrayPointer++){
        if(sequencePointer == sequence.length){
            return true;
        }
        if(sequence[sequencePointer] == array[arrayPointer]) {
            ++sequencePointer;
        }
    }
    return sequencePointer === sequence.length;
}

//------------Teste-----------------

// const program = require('./program');
// const chai = require('chai');

// it('Test Case #1', function () {
//   const array = [5, 1, 22, 25, 6, -1, 8, 10];
//   const sequence = [1, 6, -1, 10];
//   chai.expect(program.isValidSubsequence(array, sequence)).to.deep.equal(true);
//});
