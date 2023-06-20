/*Description:Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

var twoSum = function(nums, target) {
    //nums = [3, 2, 4], target = 6
    for(i = 0; i<nums.length; i++){  // loop through each element in the array
    //in addition to verify each element, i have to veirfy if the next element to sum
        for (let j = i + 1; j < nums.length; j++) { // loop through the rest of the array to find the other number
            if((nums[i] + nums[j]) ==  target) {
            //if the sum of the two numbers is equal to the target, return the index of the two 
            return [i, j]
            }
        }
    }
};

//time complexity: O(n²) -> two loops to interate
//space complexity: O(1) ->  not using any additional space
   
         

