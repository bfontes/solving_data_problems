/**
 * Converte um número romano em um número inteiro.
 * @param {string} s - O número romano a ser convertido.
 * @return {number} - O número inteiro convertido.
 */
function romanToInt(s) {
    // Mapeia os valores dos algarismos romanos
    const romanHash = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    // Mapeia as instâncias especiais, como IV, IX, etc.
    const especialInstances = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900 };
    // Variável para armazenar o resultado final
    let count = 0;
  
    // Percorre as instâncias especiais
    for (let instance in especialInstances) {
      // Verifica se a instância está presente no número romano
      if (s.includes(instance)) {
        // Incrementa o valor correspondente da instância no resultado
        count += especialInstances[instance];
        // Remove a instância do número romano para evitar processamento duplicado
        s = s.replace(instance, "");
      }
    }
  
    // Percorre os caracteres restantes do número romano
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      // Incrementa o valor correspondente do caractere no resultado
      count += romanHash[char];
    }
    
    // Retorna o resultado final da conversão
    return count;
  }
  