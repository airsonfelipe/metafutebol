
let xJogador01 = 280;
let yJogador01 = 200;
let velocidadeJogador01 = 1


function jogador01() {
  rect(xJogador01, yJogador01, 8, 8)
}


function movimentaJogador01() {
  if(xJogador01 < xBola) {
    xJogador01 += velocidadeJogador01;
  }
  if(yJogador01 < yBola) {
    yJogador01 += velocidadeJogador01;
  }
}


function jogador01ComBola() {
  if(xJogador01 == xBola && yJogador01 == yBola) {
    xJogador01 += velocidadeJogador01;
    xBola += velocidadeJogador01;
  }
}
