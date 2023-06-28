var merge = function(nums1, m, nums2, n) {
    let i = m - 1; 
    let j = n - 1; 
    let k = (m + n) - 1; 

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // Se houver elementos restantes em nums2, adicioná-los ao início de nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
};

  //[1, 2, 3, 0, 0, 0] -> [2, 5, 6]
    // i = 2
    // j = 2
    // k = 3

    //k=3 e j=2
    //nums[2]=3 < nums[2]=6 
    //nums[k] = [6]

    //k=2 e j=1
    //nums[2]=3 < nums[1]=5
    //nums[k] = [5, 6]

    //k=1, j=0
    //nums[2]=3 > nums[0]=2
    //nums[k] = [3,5,6]
    //i-- e k--;

    //k=0, i=1, j=0
   //nums[1] = 2  = nums[0]=2
   //num[k] = [2,2,3,5,6]
   //i--;

