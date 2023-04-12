//Crie um objeto chamado carro ele deve conter, modelo, ano, cor e velocidadeAtual
//Crie duas funções dentro deste objeto, uma para acelerar e outra para frear. Essas
//funções devem mudar a velocidade atual do carro.

let Carro = {
  modelo: "supra",
  ano: "1994",
  cor: "vermelho",
  velocidadeAtual: 100,

  acelerar: function(velocidade)  {
    Carro.velocidadeAtual += velocidade;
  },

  frear: function(velocidade) {
    Carro.velocidadeAtual -= velocidade;
  },
};

Carro.acelerar(50);
Carro.frear(20);
console.log(Carro.velocidadeAtual);
