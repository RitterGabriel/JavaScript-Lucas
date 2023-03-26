//Crie uma função que recebe um array de números e retorna o menor valor.

var num = [10, 210, 5]

function low(a,b){
    if(num[0] < num[1] && num[0] < num[2]){
        return num[0];
    }
    else if( num[1] < num[0] && num[1] < num[2]){
        return num[1];
    }
    else{
        return num[2];
    }
}

console.log(low(num))