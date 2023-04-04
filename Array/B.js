//Crie um array de números e ordene-os em ordem decrescente

function Ordem(num) {
    if (num[0] < num[1] && num[0] < num[2]) {
        if (num[1] < num[2]) {
            return [num[2], num[1], num[0]]
        }
         else {
          return [num[1], num[2], num[0]]
        }
        
    } else if (num[1] < num[0] && num[1] < num[2]) {
        if (num[0] < num[2]) {
            return [num[2], num[0], num[1]]
        }
        else{
            return [num[0], num[2], num[1]]
        }

    } else {
        if (num[2] < num[1] && num[2] < num[0]) {
            if (num[1] < num[0]) {
                return [num[0], num[1], num[2]]
            } 
            else{
                return [num[1], num[0], num[2]]
            }
        
        }
    }
  }
  
  
  console.log(Ordem([2, 43, 3]))
  
 