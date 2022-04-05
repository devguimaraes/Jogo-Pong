let colisao = false;

//Sons do jogo 
let ponto;
let trilha;
let raquetada;


//Variaveis da bola
let xBola = 300;
let yBola = 200;
let diametro = 15;
let raio = diametro / 2;

//Variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//Variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Variaveis do placar
let meusPontos = 0;
let pontosOponente = 0;

//Variaveis de Velocidade da bola
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

/*
Arquivos de som 

Arquivos de som estão comentados pois quando ativos não carregam o jogo, verificando acerto com professor da Alura. 

function preload(){
  trilha = loadSound("trilha.wav");
  ponto = loadSound("ponto.wav");
  raquetada = loadSound("wav");
    
}


*/


//Cria o escopo do jogo
function setup() {
  createCanvas(600, 400);
  //trilha.loop()
}

//Desenha elementos na tela
function draw() {
  background(0);
  criaBolinha();
  movimentoBola();
  limiteBordaBola();
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
  criaRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  colisaoRaqueteBiblExterna(xRaquete, yRaquete);
  colisaoRaqueteBiblExterna(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  placar();
  marcaPonto();
  //criaRaqueteOponente();
  //verificaColisaoRaquete();
}

//Cria a bola
function criaBolinha() {
  circle(xBola, yBola, diametro);
}

//Cria a raquete
function criaRaquete(x, y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

/*

Cria a raquete do oponente
function criaRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaqueteOponente, alturaRaqueteOponente)
}


*/
//Faz A bola se movimentar
function movimentoBola() {
  xBola += velocidadeXBolinha;
  yBola += velocidadeYBolinha;
}

//Faz raquete se movimentar
function movimentoRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete += -6;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 6;
  }
}

//Verifica e limita o limite da borda para bola
function limiteBordaBola() {
  if (xBola + raio > width || xBola - raio < 0) {
    velocidadeXBolinha *= -1;
    //raquetada.play()
  }

  if (yBola + raio > height || yBola - raio < 0) {
    velocidadeYBolinha *= -1;
    //raquetada.play()
  }
}

//Verifica colisão da bola com a raquete
function verificaColisaoRaquete() {
  if (
    xBola - raio < xRaquete + larguraRaquete &&
    yBola - raio < yRaquete + alturaRaquete &&
    yBola + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
  } 
}

//Verifica Colisão da raquete usando o biblioteca externa
function colisaoRaqueteBiblExterna(x, y) {
  colisao = collideRectCircle(
    x,
    y,
    larguraRaquete,
    alturaRaquete,
    xBola,
    yBola,
    raio
  );

  if (colisao) {
    velocidadeYBolinha *= -1;
  }
}

//Movimenta a raquete do oponente
function movimentaRaqueteOponente() {
  /*
  Instrução para raquete openente se mover sozinho, porem jogo ativado para multiplayer
  
  velocidadeYOponente = yBola - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
  */
  
  if (keyIsDown(87) ) {
    yRaqueteOponente += -6;
  }

  if (keyIsDown(83) ) {
    yRaqueteOponente += 6;
  }
  
  
}

function placar() {
  stroke(255)
  textAlign(CENTER)
  textSize(24);
  fill(187, 84, 30);
  rect(130, 7, 40, 22);
  fill(255)
  text(meusPontos, 150, 26);
  fill(187, 84, 30);
  rect(430, 7, 40, 22);
  fill(255)
  text(pontosOponente, 450, 26);
}

function marcaPonto() {
  if (xBola > 590) {
    meusPontos += 1;
    //ponto.play()
  }

  if (xBola < 10) {
    pontosOponente += 1;
    //ponto.play()
  }
}


