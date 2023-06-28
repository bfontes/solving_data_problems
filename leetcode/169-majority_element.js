var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    var count = 0;
    if (nums.length === 1) {
        return nums[0];
    }
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            count = 0;
        } else {
            count++;
        }
        if (count >= Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
    return 0;
};