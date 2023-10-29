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
"Naruto":

Naruto Uzumaki nasceu na Vila da Folha, Konoha, 
em um momento turbulento. 
Ele nunca conheceu seus pais, 
já que sua mãe, 
Kushina Uzumaki, 
e seu pai, 
Minato Namikaze, 
o Quarto Hokage, 
morreram pouco depois de seu nascimento, 
protegendo a vila do ataque da Kyuubi, 
uma raposa de nove caudas.

Devido à presença da Kyuubi, 
muitos moradores da vila 
passaram a temer e evitar Naruto, 
considerando-o como um monstro 
por ser o recipiente do chakra da 
Kyuubi. 
Essa rejeição marcou a 
infância de Naruto e o tornou 
determinado a se destacar 
e provar seu valor como um ninja.

Ele ingressou na Academia Ninja de Konoha 
e se esforçou para se tornar 
um ninja respeitado e alcançar 
seu objetivo de se tornar 
o Hokage da vila. 
No entanto, 
Naruto tinha 
dificuldades 
de concentração e era um 
estudante medíocre. 
Seu professor na academia, 
Iruka Umino, 
foi um dos primeiros 
a mostrar compaixão por Naruto, 
e isso teve um impacto 
positivo em sua vida.

Com o tempo, 
Naruto formou equipes e fez amigos, 
incluindo 
Sasuke Uchiha 
e 
Sakura Haruno, 
sob a liderança do 
sensei Kakashi Hatake. 
Eles se tornaram o Time 7 
e enfrentaram diversas 
missões e desafios 
juntos.

Uma parte 
fundamental da história de Naruto é a busca por Sasuke, 
que deixou a vila
em busca de poder para 
vingar seu clã. 
Naruto promete trazer 
Sasuke de volta, 
e essa promessa se 
torna um dos principais 
impulsionadores 
de sua jornada.

Naruto também descobre que ele é o Jinchuriki da Kyuubi, 
o que o leva a buscar aceitação 
e a superar o medo e o 
preconceito dos moradores de Konoha. 
À medida que a série avança, 
ele lentamente conquista 
o respeito e a amizade de muitos.

Naruto enfrenta inúmeros desafios 
e vilões ao longo de sua jornada,
incluindo Orochimaru, 
Pain e a organização 
criminosa Akatsuki. 
Ele continua treinando, 
aprimorando suas 
habilidades como ninja 
e 
desenvolvendo novas técnicas, 
como o Rasengan.

Uma parte 
fundamental da 
história de Naruto é o 
conceito de "Ninjas da Aldeia", 
que enfatiza o 
poder da amizade, 
da superação pessoal 
e da proteção da vila. 
Isso se reflete no 
desejo de Naruto 
de se tornar o Hokage,
o líder da vila, 
e em sua determinação em 
proteger seus 
amigos e sua aldeia.

No final da série original, 
Naruto alcança
muitos de seus objetivos 
e se torna um herói 
respeitado em Konoha. 
Ele também 
desempenha 
um papel 
crucial na proteção 
da vila e na resolução 
de 
conflitos globais.

A série "Naruto" continua 
em "Naruto: Shippuden", 
onde Naruto parte em uma 
jornada para se tornar 
mais forte e cumprir 
sua promessa de 
trazer 
Sasuke de volta.

A história de Naruto 
é uma jornada emocionante 
sobre perseverança, 
amizade e superação, 
e ele se torna um símbolo 
de esperança 
e inspiração para
ninjas e fãs em todo o mundo.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
