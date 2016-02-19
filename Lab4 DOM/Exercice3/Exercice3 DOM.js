var ps = document.querySelectorAll('p');
for(var i in ps)
	{
		console.log(ps[i]);
		ps[i].parentNode.removeChild(ps[i]);
	}

