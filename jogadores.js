let xJogador01 = 280;
let yJogador01 = 200;
let velocidadeJogador01 = 1
let chuteJogador01 = 10


let xJogador02 = 320;
let yJogador02 = 200;
let velocidadeJogador02 = 1
let chuteJogador02 = 10


let xJogador03 = 280;
let yJogador03 = 250;
let velocidadeJogador03 = 2
let chuteJogador03 = 10


//traves
let xTrave01 = 576;
let yTrave01 = 200;
let comprimentoTrave01 = 8;
let alturaTrave01 = 50;

let xTrave02 = 16;
let yTrave02 = 200;
let comprimentoTrave02 = 8;
let alturaTrave02 = 50;


function jogador01() {
 rect(xJogador01, yJogador01, 8, 8)
}


function jogador02() {
 rect(xJogador02, yJogador02, 8, 8);
}


function jogador03() {
 rect(xJogador03, yJogador03, 8, 8);
}


function traves() {
  rect(xTrave01,yTrave01, comprimentoTrave01, alturaTrave01);
  rect(xTrave02,yTrave02, comprimentoTrave02, alturaTrave02);
}


function movimentaJogador01() {
  if(xJogador01 < xBola) {
    xJogador01 += velocidadeJogador01;
  }
  if(yJogador01 < yBola) {
    yJogador01 += velocidadeJogador01;
  }
}


function movimentaJogador02() {
  if(xJogador02 > xBola) {
    xJogador02 -= velocidadeJogador02;
  }
  if(yJogador02 < yBola) {
    yJogador02 += velocidadeJogador02;
  }
}


function movimentaJogador03() {
  if(xJogador03 < xBola) {
    xJogador03 += velocidadeJogador03;
  }
  if(yJogador03 > yBola) {
    yJogador03 -= velocidadeJogador03;
  }
}


function jogador01ComBola() {
  if(xJogador01 == xBola && yJogador01 == yBola) {
    xJogador01 += velocidadeJogador01;
    xBola += velocidadeJogador01;
   }
}


function jogador02ComBola() {
  if(xJogador02 == xBola && yJogador02 == yBola) {
    xJogador02 -= velocidadeJogador02;
    xBola -= velocidadeJogador02;
   }
}


function jogador03ComBola() {
  if(xJogador03 == xBola && yJogador03 == yBola) {
    xJogador03 += velocidadeJogador03;
    xBola += velocidadeJogador03;
   }
}





function jogador01Chuta() {
  if(xJogador01 >= 500) {
    xJogador01 = 500;
    yJogador01 = yBola;
    xBola += chuteJogador01
  }
}


function jogador02Chuta() {
  if(xJogador02 <= 100) {
    xJogador02 = 100;
    yJogador02 = yBola;
    xBola -= chuteJogador02
  }
}


function jogador03Chuta() {
  if(xJogador03 >= 500) {
    xJogador03 = 500;
    yJogador03 = yBola;
    xBola += chuteJogador03
  }
}


function verificaGolDireita() {
  if(xBola > width - 12) {
    xBola = 294;
    yBola = 220;
    xJogador01 = 280;
    yJogador01 = 200;
    xJogador02 = 320;
    yJogador02 = 200;
    xJogador03 = 280;
    yJogador03 = 250;
  }

}


function verificaGolEsquerda() {
  if(xBola < 0 + 12) {
    xBola = 294;
    yBola = 220;
    xJogador02 = 320;
    yJogador02 = 200;
    xJogador01 = 280;
    yJogador01 = 200;
    xJogador03 = 280;
    yJogador03 = 250;
  }

}




//colisao = collideRectCircle(xTrave, yTrave, comprimentoTrave, //alturaTrave, xBola, yBola, 12)
    
  //if (colisao) {
  // xBola = 294;
  // yBola = 220;
   //xJogador01 = 280;
   //yJogador01 = 200;