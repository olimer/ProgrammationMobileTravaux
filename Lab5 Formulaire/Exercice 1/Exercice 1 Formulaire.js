var compte = {};


function surligne(champ, erreur) 
{ if(erreur) 
	champ.style.backgroundColor = "#fba"; 
	else 
	champ.style.backgroundColor = ""; }

function verifId(champ)
{
	if (champ.value.length < 2 || champ.value.length > 25)
		{
			surligne(champ,true);
			alert("Champ incorrecte");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function verifPass(champ)
{
	if (champ.value.length < 6 || champ.value.length > 20)
		{
			surligne(champ,true);
			alert("mot de passe incorrecte");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function verifNom(champ)
{
	if (champ.value.length < 6 || champ.value.length > 20)
		{
			surligne(champ,true);
			alert("Nom incorrecte");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function verifPrenom(champ)
{
	if (champ.value.length < 6 || champ.value.length > 20)
		{
			surligne(champ,true);
			alert("Prenom incorrecte");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function verifMail(champ) 
{ 
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 
	if(!regex.test(champ.value)) 
		{ 
			surligne(champ, true); return false; 
			alert("Email incorrecte");
		} 
		else 
		{ 
			surligne(champ, false); return true; 
		} 		
}

function verifierIdPass(Formulaire)
{
	
	var IdOK = verifId(Formulaire.NomId);
	var MDPOK = verifPass(Formulaire.MotPasse);
	var nomOK = verifNom(Formulaire.Nom);
	var PrenomOK = verifPrenom(Formulaire.Prenom);
	var emailOK = verifMail(Formulaire.email);
	
	if(IdOK && MDPOK && nomOK && PrenomOK && emailOK)
	{
		compte[Formulaire.NomId.value] = Formulaire.MotPasse.value;
	}
	//Toujours retourner false!!!!
	return false;
	
	
}

function FaireConnexion(Formulaire)
{
	if(compte[Formulaire.ID.value] == Formulaire.mdp.value)
	{
		alert('Vous êtes maintenant connecter');
	}		
	else
	{
		alert('Votre connexion ne fonctionne pas');
	}
	return false;
}



		