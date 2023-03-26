//Crie um objeto chamado carro ele deve conter, modelo, ano, cor e velocidadeAtual
//Crie duas funções dentro deste objeto, uma para acelerar e outra para frear. Essas 
//funções devem mudar a velocidade atual do carro.

class Carro {
    constructor(modelo, ano, cor, velocidade = 0) {
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
      this.velocidade = velocidade;
    }
  
    acelerar(incremento) {
      this.velocidade += incremento;
    }
  
    frear(decremento) {
      this.velocidade -= decremento;
    }
  }
  
  let meuCarro = new Carro("Supra", 1994, "vermelho");
  console.log(meuCarro);
  
  meuCarro.acelerar(50);
  console.log(meuCarro.velocidade);
  
  meuCarro.frear(20);
  console.log(meuCarro.velocidade);
  

