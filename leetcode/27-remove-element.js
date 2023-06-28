var removeElement = function(nums, val) {
    var result = []
    for(i=0; i<nums.length; i++) {
        if(val !== nums[i]) {
            //add elementos em um array
            result.push(nums[i])
        }
    }

    for(j=0; j<result.length; j++) {
        //copiar os elementos de result de volta no array nums
        nums[j] = result[j]
    }

    return result.length;
};