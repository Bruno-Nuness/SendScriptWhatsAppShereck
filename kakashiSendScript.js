async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Kakashi Hatake:

Havia um tempo em que a Vila da Folha,
conhecida como Konohagakure,
estava em um período de relativa paz,
após muitas batalhas e conflitos.
Nesse ambiente, um jovem ninja começou a se destacar, 
e seu nome era Kakashi Hatake. 

Kakashi nasceu em uma família de renomados ninjas de Konoha. 
Seu pai, Sakumo Hatake, 
era conhecido como o "Relâmpago Branco de Konoha" 
devido à sua incrível habilidade e 
destemor em missões. 
No entanto, a fama de seu pai teve um preço alto, 
e a pressão e expectativas o 
levaram a cometer um ato controverso 
que resultou em sua própria morte e 
em ser ostracizado pela aldeia.

Kakashi cresceu sob a 
sombra do legado de seu pai, 
e isso moldou sua personalidade. 
Ele era conhecido por ser um ninja brilhante 
e extremamente talentoso desde muito jovem, 
mas também era um perfeccionista rigoroso e frio, 
muitas vezes seguindo as regras de maneira estrita. 
Ele ingressou na Academia Ninja de Konoha 
e se formou com honras, tornando-se um genin.

No entanto, 
Kakashi logo descobriu 
que a vida de um ninja não 
era apenas sobre habilidades e regras. 
Ele foi designado como membro do Time Minato, 
liderado por Minato Namikaze, 
que mais tarde se tornaria o Quarto Hokage. 
Seus companheiros de equipe 
eram Rin Nohara e Obito Uchiha.

A missão mais marcante de Kakashi
com sua equipe foi uma missão para
resgatar Rin, que havia sido capturada
pelos inimigos. Durante a missão, 
Obito deu sua vida para salvar Kakashi, 
e antes de morrer, ele pediu a Kakashi 
que 
cuidasse de Rin e que nunca 
abandonasse seus amigos.

Essa tragédia teve um impacto profundo 
em Kakashi, 
que passou a levar as palavras de Obito a sério. 
Ele honrou a promessa feita ao amigo, 
cuidou de Rin e nunca mais 
abandonou seus aliados.

Com o tempo, 
Kakashi progrediu e se tornou um jounin, 
alcançando um nível 
inigualável de habilidade. 
Ele também foi presenteado 
com o Sharingan de Obito 
após a morte do amigo, 
e ele começou a utilizar esse 
poderoso doujutsu com maestria, 
ganhando o apelido de 
"Kakashi do Sharingan."

Kakashi também
se tornou um mentor para a 
próxima geração de ninjas, 
incluindo 
Naruto Uzumaki, 
Sasuke Uchiha 
e 
Sakura Haruno. 
Ele os treinou e os guiou em suas jornadas, 
transmitindo lições 
importantes sobre trabalho em equipe, 
perseverança e a importância 
de proteger 
aqueles que se importam.

Ao longo 
de sua vida, 
Kakashi enfrentou 
inúmeras ameaças 
à Vila da Folha 
e desempenhou um papel fundamental
na proteção de Konoha. 
Ele também se tornou 
o 
Sexto Hokage da vila, 
liderando com 
sabedoria e 
honra.

Kakashi Hatake 
é lembrado como um 
dos ninjas mais respeitados 
e admirados em Konoha, 
com um legado de amizade, 
lealdade e habilidade ninja 
inigualável. Sua história é uma 
inspiração para todos os que o conheceram 
e uma lembrança de que, mesmo nas sombras, a 
luz da amizade e da determinação pode 
brilhar 
intensamente.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
