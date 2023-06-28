var removeDuplicates = function(nums) {
    //verificar se os numeros da matriz de entrada são vazios, se for, retorna 0
   if(!nums.length) return 0;
    //inicializar um ponteiro k como 0 - rastra os elementos unicos do array
   var k = 0;
   //percorrer os elementos da matriz de entrada
   for(i=0; i<nums.length; i++) {
    //verificar se nao vimos ainda o elemento e se o elemento atual é maior que o penultimo unico
    if(k < 2 || (nums[i] > nums[k-2])) {
        nums[k] = nums[i];
        k++;
    }
   }
   return k;
};