var Cpt;
Cpt = 0;
function clicked()
{
	
	Cpt= Cpt+1;
	var ps = document.getElementById("btnclique");
	ps.innerHTML= "Vous avez cliqu� sur le bouton "+Cpt+" fois";
}

