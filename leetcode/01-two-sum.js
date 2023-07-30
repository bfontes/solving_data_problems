/*Description:Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. Return an empty array if no two numbers sum up to the target sum
*/

//time complexity: O(n²) -> two loops to interate
//space complexity: O(1) ->  not using any additional space
 

//solution 01
function twoNumberSum(array, targetSum) {
    //counter to loop through the array
    for(let i=0; i<array.length-1; i++) {
        const firstElement = array[i];
        //in addition to verify each element, i have to verify if the next element to sum
         for(let j = i + 1; j<array.length; j++) {
            const secondElement = array[j];
           //verifying if the current element plus next element is equal to target sum
            if(firstElement + secondElement == targetSum) {
               //returning the correct numbers
               return [firstElement, secondElement];
            }
         }
      }
    return [];
}

//time complexity: O(n(log n)) -> 
//space complexity: O(1) ->  not using any additional space

//solution 02
function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b);
    let left = 0
    let right = array.length -1;
    while(left<right) {
      const currentSum = array[left] + array[right];
      if(currentSum == targetSum) {
        return [array[left], array[right]];
      }
      else if(currentSum < targetSum) {
        left++;
      }
      else if(currentSum > targetSum) {
        right--;
      }
    }
    return [];
}

//time complexity: O(n) -> tranversing the array only once(acessing values in a hash table)
//space complexity: O(n) ->  we are adding values to our hash table 

//solution 03
function twoNumberSum(array, targetSum) {
    const nums = {}
    //loop throught each number of the array
    for(const num of array) {
        //y = targetSum - x
        const complementNum = targetSum-num;
        //check whether this number is already present or not
        if(complementNum in nums) {
            //return the sum that corresponds to the target
            return[complementNum, num];
        }
        else {
            //if i don't find the number, the current number that i'm checking, is add like true in our hash table
            nums[num]= true;
        }
    }
    return [];
}
  

//----------Teste------------------


// const program = require('./program');
// const chai = require('chai');

// it('Test Case #1', function () {
//   const output = program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
//   chai.expect(output.length === 2).to.deep.equal(true);
//   chai.expect(output.includes(11)).to.deep.equal(true);
//   chai.expect(output.includes(-1)).to.deep.equal(true);
// });
