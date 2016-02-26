


	function surligne(champ, erreur) 
{ if(erreur) 
	champ.style.backgroundColor = "#fba"; 
	else 
	champ.style.backgroundColor = ""; }

function NomProduit(champ)
{
	if (champ.value.length < 3 || champ.value.length > 35)
		{
			surligne(champ,true);
			alert("Nom produit incorrecte");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function QuantiteCom(champ)
{
	if (champ.value.length <3 || champ.value.length > 100)
		{
			surligne(champ,true);
			alert("Veuillez mettre une quantité");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function NomCli(champ)
{
	if (champ.value.length < 3 || champ.value.length > 50)
		{
			surligne(champ,true);
			alert("Veuillez mettre un nom");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function AdresseCli(champ)
{
	if (champ.value.length < 3 || champ.value.length > 50)
		{
			surligne(champ,true);
			alert("Veuillez entrez une adresse de courriel");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}

function AdresseLiv(champ) 
{ 
	if (champ.value.length < 3 || champ.value.length > 50)
		{
			surligne(champ,true);
			alert("Veuillez entrez une adresse de livraison");
			return false;
		}
		else
		{
			surligne (champ,false);
			return true;
		}
}



		