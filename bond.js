var tabListeAgents = {	'001': [['Edward Donne'], "Referred to in the Raymond Benson novel, Doubleshot, Edward Donne is the only agent 001."],
						'002': [['Bill Fairbanks','Unnamed'],'Aucune description'],
						'003': [['Jack Mason', 'Unnamed'], 'Aucune description'],
						'004': [['Frederick Wardner', 'Scarlett Papava', 'Unnamed', 'Unnamed'], "A 004 appears in the Benson novel The Facts of Death. In the Sebastian Faulks novel Devil May Care, Bond girl Scarlett Papava is unveiled as 004, replacing the previous agent who was killed in Berlin."],
						'005': [['Stuart Thomas'], "Was 005 until defective eyesight impaired his marksmanship, and he was made head of Station G (Greece) in Colonel Sun."],
						'006': [['Major Jack Giddings', 'Alec Trevelyan', 'Unnamed'], "006, a Royal Marine commando, is mentioned in On Her Majesty's Secret Service. In The Moneypenny Diaries: Guardian Angel he is named as Major Jack Giddings and second to Bond in the 00 section. Alec Trevelyan is another 006 featured in GoldenEye."],
						'007': [['James Bond'], "James Bond is the only agent 007. During You Only Live Twice, Bond was transferred into another branch and given the number 7777, suggesting there was no active agent 007 in that time; he is reinstated as such in The Man with the Golden Gun. In the John Gardner novels, agent 007 is the remaining active 00-agent, the section was disbanded in the 1980s, later contradicted by Raymond Benson's novels."],
						'008': [['Bill', 'Unnamed'], "In the novel Goldfinger, Bond thinks to himself that 008 would likely avenge Bond by killing Goldfinger. As Bond thinks this, he ruminates that 008 is \"a good man, more careful than Bond.\" In the novel Moonraker, 008 (called \"Bill\" by Bond) is mentioned as being on recuperative leave after returning from a mission behind the Iron Curtain."],
						'009': [['Unnamed', 'Unnamed', 'Unnamed', 'Unnamed', 'Unnamed'], "Referred to in the novel Thunderball. Also played a minor role in Spectre."],
						'0010': [['John Wolfgramm'], "Referred to in the Benson novel The Man with the Red Tattoo."],
						'0011': [['Cederic'], "Mentioned briefly in the novel Moonraker as vanishing while on assignment in Singapore."],
						'0012': [['Sam Johnston'], "Although unmentioned on screen, Benson's The World Is Not Enough novelisation has Bond investigating 0012's death at story's start (seen in a photograph of a dark-haired man, in the film)."],
						'0013': [['Briony Thorne'], "Aucune description"]};

function codeAgent(code) // retourne un tableau contenant le nom de l'agent et la description correspondant au code 
{
	if (tabListeAgents[code] === undefined) // renvoie 0 si le code n'existe pas
	{
		alert('Cet agent n\'existe pas !');
		return 0;
	}
	
	for (i=0 ; i<tabListeAgents[code][0].length; i++)
	{
		if (tabListeAgents[code][0][i] == 'Unnamed') // si il manque des noms à l'agent on les demande à l'utilisateur
		{
			nom = prompt('Entrez un nom pour cet agent : ');
			tabListeAgents[code][0][i] = nom;
			arrAgent = tabListeAgents[code];
		}
		else
		{
			arrAgent = tabListeAgents[code];
		}
	}
	return arrAgent;
}

agent = codeAgent(prompt('Entrez un nom de code : '));

if (agent != 0)
{
	alert(agent);
}

var tabAgents=[];

var i=0;

// Transforme le Tableau en 3Dimensions du debut en un tableau avec les balises html de tableaux
for(numero in tabListeAgents)
{	
	if (Array.isArray(tabListeAgents[numero]))
	{
		if (tabListeAgents[numero][0].length > 1)
		{
			tabAgents[i]="<tr><td>" + numero + "</td><td>" +	tabListeAgents[numero][0].join(",") + "</td><td>" + tabListeAgents[numero][1] + "</td></tr>";
		}
		else
		{
			tabAgents[i]="<tr><td>" + numero + "</td><td>" + tabListeAgents[numero][0] + "</td><td>" + tabListeAgents[numero][1] + "</td></tr>";
		}
		i++;
	}
}

var agentsAffiches = '<table>';

for (i=0 ; i<tabAgents.length ; i++)
{
	agentsAffiches += tabAgents[i];
}

agentsAffiches += '</table>';

document.body.innerHTML = agentsAffiches; //affiche le tableau html dans la balise body