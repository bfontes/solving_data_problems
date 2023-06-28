var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for(let j=0; j<nums.length; j++) {
        if(nums[j]!=nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
};

// input    ===== [1, 1, 2]


// posicao  ===== [0  1  2]                
//                 j
// 1!=0, i++, i= 1
// nums[i] = [1]


// posicao  ===== [0  1  2]                
//                    j
// 1==1, nao faz nada


// posicao  ===== [0  1  2]                
//                       j
// j=2, i=1
// nums[i]=[2]







