//Crie um array de números e ordene-os em ordem crescente.

num = [5, 4, 6, 1, 3, 2];

num.sort(function (a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(num);
