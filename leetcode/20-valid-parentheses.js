/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    //utilizar uma pilha para armazenar os caracteres de abertura encontrados
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    
    for (let char of s) {
      if (char in brackets) {
      //entrada válida
        stack.push(char);
      } else {
      //entrada invalida
        if (stack.length === 0 || char !== brackets[stack.pop()]) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  };
  
  