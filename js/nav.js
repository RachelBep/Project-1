const nav =
{
	'links':[
				{'title':'Magic 8 ball',
	             'link':'8ball.html'
	            },
							{'title':'Tarot Reading',
				             'link':'tarotSpread.html'
				            },
										{'title':'Home',
							             'link':'index.html'
							            },
	           ]
}

let template = Handlebars.compile(document.querySelector('#layout').innerHTML);

let output = template(nav);
document.querySelector('.nav').innerHTML = output;
