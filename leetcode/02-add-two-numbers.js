/*Description: 
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
var addTwoNumbers = function(l1, l2) {
  const iter = (no1, no2, resto = 0) => {
    //Verifica se não existem nós (no1, no2) e se não há resto para ser adicionado.
    // Nesse caso, retorna null para indicar o final da soma.
      if (!no1 && !no2 && !resto) return null;
      //Calcula o valor da soma atual e verifica se esse valor existe antes de fazer a soma (.?)
      const newVal = (no1?.val || 0) + (no2?.val || 0) + resto;
      //Divide o novo valor por 10 e arredonda para baixo pra ver o novo valor do resto
      const nextNode = iter(no1?.next, no2?.next, Math.floor(newVal / 10));
      //cria um novo no com a lista encadeada e o no seguinte e retorna-o
      return new ListNode(newVal % 10, nextNode);
  }
  //Depois, retorna o no que é a soma dos nos 1 e 2
  return iter(l1, l2);
};