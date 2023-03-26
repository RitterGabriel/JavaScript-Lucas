//Crie um array de números e ordene-os em ordem decrescente

num = [5, 4, 6, 1, 3, 2,];

num.sort(function(a, b) {
    console.log(a, b, a - b)
    return a - b;
});