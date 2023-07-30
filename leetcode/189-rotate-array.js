function rotateVector(nums, k) {
  for (let rep = 0; rep < k; rep++) {
    // Armazenando o valor final que vai para a frente
    const aux = nums[nums.length - 1];
    // Movendo os valores para a frente
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    // Adicionando o valor final na frente
    nums[0] = aux;
  }
  return nums;
}

// Vetor de teste
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 2;
const result = rotateVector(nums, k);
console.log(result);
 


// #Input: nums = [1,2,3,4,5,6,7], k = 3
// #Output: [5,6,7,1,2,3,4]
// #Explanation:
// #rotate 1 steps to the right: [7,1,2,3,4,5,6]
// #rotate 2 steps to the right: [6,7,1,2,3,4,5]
// #rotate 3 steps to the right: [5,6,7,1,2,3,4]

// def Rotate_Vector(nums,k):
//     #repetir k vezes
//     for rep in range(k):
//         #armazenando o valor final que vai para a frente
//         aux = vector[len(vector)-1]
//         #movendo os valores para a frente
//         for i in range(len(vector)-1,0,-1):
//             vector[i] = vector[i-1]
//         #adicionando o valor final na frente
//         vector[0] = aux
//     return vector

// #vetor de teste
// vector = [1, 2]
// k = 3
// result = Rotate_Vector(vector,3)
// print(result)

