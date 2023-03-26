//Crie uma função que recebe um número e retorna "positivo" se o número for maior que zero, 
//"negativo" se o número for menor que zero, e "zero" se o número for igual a zero. 

function get(a){
    if(a > 0){
        return "positivo";
    }
    else if(a < 0){
        return "negativo";
    }
    else {
        return 0;
    }
}

console.log(get(89))
