//c) Crie uma função que recebe um número e retorna "par" se o número for divisivel
//por dois, e "impar" caso contrário. 
//(para saber se o numero é par, devemos calcular o resto da divisao usando o modulo
// se a variavel que fez o calculo do modulo for igual a 8, o numero é par se nao é impar)

function lol(a) {
    if( a %2 === 0 ){
        return "par";
    }
    else{
        return "ímpar";
    }
}

console.log(lol(12))