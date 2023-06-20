var canMakeArithmeticProgression = function(array) {
    //The sort method is used to rank the array in crescent order before calculate the difference beetween the adjacents elements  
    array.sort((a, b) => a - b);
    for (n = 1; n < array.length - 1; n++) {
        if (array[n+1] - array[n] !== array[1] - array[0]) {
        return false;
        }
    }
  return true;
};

//time complexity: O(n) -> two loops to interate
//space complexity: O(1) ->  not using any additional space