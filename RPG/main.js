var nome, vida, classe, decisao, atk, dano, start_hp;

var personagem = {
	'nome': prompt("Qual o nome do seu personagem ?"),
	'classe':{
		'warrior':{
			'warrior': 'warrior',
			'pocao': 5,
			'vida': 20,
			'dano': 10
		},
		'mago':{
			'mago': 'mago',
			'pocao': 2,
			'vida': 14,
			'dano': 20
		}},
}


function escolha(){
	classe = Number(prompt("Ola "+personagem.nome+", qual classe voce ira escolher ?\n1-Warrior//2-Mago"));
}

function acao(){

	while (true) {
		decisao = Number(prompt("Qual opcao escolher ?\n1 ou 2 ?"));

		if (decisao == 1) {
			break;
		}else if (decisao == 2) {
			break;
		}else if (decisao < 1|| decisao >2) {
			alert("Opcao invalida");
			continue;
		}
}
}

function attack(){
	atk = Math.trunc(Math.random()*dano)+1;
}

function regen(potion){
	potion = start_hp/2;
	pocao--;

	if (pocao > 0) {
		vida = vida+potion;
		alert("Vc tem "+pocao+" pocoes e possui "+vida+" HP");
	}else if (pocao == 0) {
		vida = vida+potion;
		alert("Voce usou a sua ultima pocao e seu HP eh "+vida+"");
	} else if (pocao < 0) {
		alert("Acabaram suas pocoes");
	}
	return pocao;
}

function luta(life,damage){
	life = 20

	alert("Voce entrou em uma batalha");

	while (life > 0|| vida > 0) {

		acao();


		if(decisao == 1){

			attack();

			life = life-atk;
			alert("Voce deu "+atk+" de dano\nEnemy HP: "+life);

		}else
		if(decisao == 2){

			regen();

		}
		else
		if (decisao < 1 || decisao > 2) {
			alert("Nao eh uma opcao valida")};


		if (life <= 0) {
			alert("Parabens, voce ganhou a batalha");
			vida = start_hp;
			break;}
			else
			if (life > 0) {
				damage = Math.trunc(Math.random()*6)+1;
				vida = vida-damage;
				alert("O inimigo atacou voce e voce levou "+damage+" de dano\nSua vida atual eh "+vida);
			};
			if (vida <= 0) {
				alert("Infelizmente seu total de vida chegou a 0\nFim de jogo :v")
				break;
			}
		}
		}

function boss(life,damage){
	life = 30

	alert("Voce entrou em uma batalha");

	while (life > 0|| vida > 0) {

		acao();


		if(decisao == 1){

			attack();

			life = life-atk;
			alert("Voce deu "+atk+" de dano\nEnemy HP: "+life);

		}else
		if(decisao == 2){

			regen();

		}
		else
		if (decisao < 1 || decisao > 2) {
			alert("Nao eh uma opcao valida")};


		if (life <= 0) {
			alert("Parabens, voce ganhou a batalha");
			vida = start_hp;
			break;}
			else
			if (life > 0) {
				damage = Math.trunc(Math.random()*8)+1;
				vida = vida-damage;
				alert("O inimigo atacou voce e voce levou "+damage+" de dano\nSua vida atual eh "+vida);
			};
			if (vida <= 0) {
				alert("Infelizmente seu total de vida chegou a 0\nFim de jogo :v")
				break;
			}
		}
}

//Inicio

alert("Status do warrior\nHP: "+personagem.classe.warrior.vida+"\nDado de dano: "+personagem.classe.warrior.dano+"\nPocoes: "+personagem.classe.warrior.pocao);
alert("Status do mago\nHP: "+personagem.classe.mago.vida+"\nDado de dano: "+personagem.classe.mago.dano+"\nPocoes: "+personagem.classe.mago.pocao);
alert("A pocao cura metade da vida inicial");
alert("Em batalha: 1-Atacar//2-Usar pocao\nEm alguma situacao: 1-Sim//2-Nao");


while(true){

escolha();

if(classe == 1){
	nome = personagem.nome;
	classe = personagem.classe.warrior.warrior;
	pocao = personagem.classe.warrior.pocao;
	vida = personagem.classe.warrior.vida;
	dano = personagem.classe.warrior.dano;
	alert("Voce escolheu a classe "+classe);
	break;
}else
if (classe == 2) {
	nome = personagem.nome;
	classe = personagem.classe.mago.mago;
	pocao = personagem.classe.mago.pocao;
	vida = personagem.classe.mago.vida;
	dano = personagem.classe.mago.dano;
	alert("Voce escolheu a classe "+classe);
	break;
}else
if(classe < 1 || classe > 2){
	alert("Nao eh uma opcao valida");
	continue;
}
}


start_hp = vida;


while(true){

alert("Voce esta em um balcao de uma taverna com uma caneca de madeira na mao cheia de cerveja.\nO taverneiro oferece uma informacao caso voce venca a competicao de bebida\nAceitar ?");
//1º situacao
acao();

if(decisao == 1){
	alert("Voce se posiciona na mesa contra seu adversario");
	alert("Voce vence depois de algumas canecas, porem seu oponente nao parece feliz com isso");
//1º luta
	luta();
	if (vida <= 0) {break;}
	alert("Depois da batalha o taverneiro revela a info e voce descobre que tem um tesouro sendo vigiado por um guardiao\nVoce deve adentrar a florestra para encontra-lo em um templo")
	alert("Voce se encontra na floresta e percebe um rastro que forma um caminho pela floresta.\nSegui-lo ou nao ?")
//2º situacao
	acao();
	if(decisao == 1){
		alert("Voce seguiu seu rastro e achou o templo .\nVoce ve um rastro de sangue indo pra dentro do templo");
		alert("Voce entra  no templo com cuidado observando escrituras estranhas no corredor ate ouvir um grito no final do corredor\nSeguir para mais dentro do templo ?");
//3º situacao
		acao();
		if (decisao == 1) {
			alert("Voce chega ao final do corredor e ve uma pessoa sendo esmagada por um golem de pedra");
			alert("Ele nao reparou sua presenca,porem voce sabe que para conquistar o tesouro voce deve passar por ele\nEnfrenta-lo ?");
//4º situacao
			acao();
			if (decisao == 1) {
				alert("Voce decide enfrenta-lo com muita determinacao");
//2º luta
				boss();
				if (vida <= 0) {break;}
				alert("Voce conseguiu vencer o guardiao, porem teme que haja outros mais ao fundo\nSeguir ?");
//5º situacao
				acao();
				if (decisao == 1) {
					alert("Por sorte aquele era o unico");
					alert("Voce chegou ate o fim do templo sem problemas\nAchou o tesouro que era uma arca cheia de diheiro");
					alert("Parabens. Voce concluiu este jogo");
					break;}
					else
				if (decisao == 2) {
					alert("Voce preza pela sua vida e decide ir embora. Pelo menos tera uma boa historia para contar pros beberroes");
					break;}
			}else
		 if (decisao == 2) {
	alert("Voce fica assustado com o que viu e sai correndo")
	break;
}
}else
if (decisao == 2) {
alert("Voce com muito medo sai correndo do templo");
break;
}
}else
if (decisao == 2) {
alert("Voce deccide ir embora da floresta");
break;
}
}else
if (decisao == 2) {
alert("Voce apenas o ignora e toma sua cerveja");
break;}
else
if (decisao == 2 ) {
	alert("Voce apenas o ignora e toma sua cerveja");
	break;}}
