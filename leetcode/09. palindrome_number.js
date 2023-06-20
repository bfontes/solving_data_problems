var isPalindrome = function(x) {
    //convertendo pra string
    numero =  x.toString();
    //percorrer a string de numeros
    for(i=0; i<numero.length; i++) {
        //comparando o numero da posição inicial com o final
        if (numero[i]!=numero[numero.length-1-i]) {
            return false;
        }
    }
    return true;
};



