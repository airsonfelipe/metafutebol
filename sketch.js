function setup() {
  createCanvas(600, 450);
}



function draw() {
  background(imagemCampo);
  jogador01();
  jogador02();
  bola();
  movimentaJogador01();
  movimentaJogador02();
  jogador01ComBola();
  jogador02ComBola();
 // gol();
  traves();
  verificaGolDireita();
  verificaGolEsquerda();
  jogador01Chuta();
  jogador02Chuta();
}




