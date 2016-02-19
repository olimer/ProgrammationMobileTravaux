	{
	var Nb = prompt("Veuillez entrez le chiffre");
	var chiffre = Math.floor(Math.random()*20);
	Trouvezchiffre();
	alert("le chiffre est " + Nb);	
		
							
	
								
							


	function Trouvezchiffre()
		{
			do
			{
				if (Nb> chiffre)
					{
						alert("le chiffre est plus petit");
						Nb = prompt("Veuillez entrez le chiffre");
					}
					else
					{
						if(Nb< chiffre)
							{
								alert("le chiffre est plus grand");
								Nb = prompt("Veuillez entrez le chiffre");
		
							}
							else
							{
								alert("le chiffre est " + Nb);
							}
								
						
					}
			}		
			while (Nb!==chiffre); 
			
		
		
		}
		
	}	
	



