//Crie uma função que recebe um array de números e retorna o maior valor.

var num = [100, 210, 100]

function big(a,b){
    if(num[0] > num[1] && num[0] > num[2]){
        return num[0];
    }
    else if( num[1] > num[0] && num[1] > num[2]){
        return num[1];
    }
    else{
        return num[2];
    }
}

console.log(big(num));