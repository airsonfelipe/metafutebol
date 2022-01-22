let xJogador01 = 280;
let yJogador01 = 200;
let velocidadeJogador01 = 1
let chuteJogador01 = 10


//traves
let xTrave = 576;
let yTrave = 200;
let comprimentoTrave = 8;
let alturaTrave = 50;


let colisao = false;


function jogador01() {
 rect(xJogador01, yJogador01, 8, 8)
}


function traves() {
  rect(xTrave,yTrave, comprimentoTrave, alturaTrave)
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


function verificaColisao() {
  if(xBola > width - 12) {
    xBola = 294;
    yBola = 220;
    xJogador01 = 280;
    yJogador01 = 200;
  }

}


function jogador01Chuta() {
  if(xJogador01 >= 400) {
    xJogador01 = 400;
    yJogador01 = yBola;
    xBola += chuteJogador01
  }
}










//colisao = collideRectCircle(xTrave, yTrave, comprimentoTrave, //alturaTrave, xBola, yBola, 12)
    
  //if (colisao) {
  // xBola = 294;
  // yBola = 220;
   //xJogador01 = 280;
   //yJogador01 = 200;