/**
 * @param {string[]} strs
 * @return {string}
 */
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
var longestCommonPrefix = function(strs) {
    let sequencia = '';
    if (strs.length === 0) {
      return sequencia;
    }
    let primeiro = strs[0];
    for (let i = 0; i < primeiro.length; i++) {
      const char = primeiro[i];
      for (let j = 1; j < strs.length; j++) {
        if (i >= strs[j].length || strs[j][i] !== char) {
          return sequencia;
        }
      }
      sequencia += char;
    }
    return sequencia;
};


// segunda resolução
// const longestCommonPrefix = (strs) => {
//     if (strs.length === 0) return '';
  
//     const primeiro = strs[0];
  
//     for (let i = 0; i < primeiro.length; i++) {
//       const char = primeiro[i];
         //Verificar se algum dos elementos do array não corresponde ao char na posição i. 
//       if (strs.some((str) => str[i] !== char)) {
           //Se isso acontecer, retornamos a parte do prefixo já percorrida
//         return primeiro.slice(0, i);
//       }
//     }
//     return primeiro;
// };
  
  


  