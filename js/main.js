$(function(){	

	$('.styleguide-demo').each(function(){
		html = $(this).html();

		while (html !=(html = html.replace('<', '&lt;')));
		while (html !=(html = html.replace('>', '&gt;')));
		while (html !=(html = html.replace('                  ', '')));

		$(this).after('<div class="styleguide-code"><pre class="prettyprint linenums"></pre></div>');
		$(this).siblings('.styleguide-code').children().append(html);

	});
	
	// PrettyPrint
	var $window = $(window);
	window.prettyPrint && prettyPrint();


	// Montagem do menu lateral
	var paginas = [
		['Sobre', 'index'],
		['Botões', 'botoes'],
		['Formulários', 'forms'],
		['Navegação', 'navegacao'],
		['Ícones', 'icons'],
		['Thumbnails', 'thumbnails']

	];
	for( var i = 0; i < paginas.length; i++ ) {
		var atual = paginas[i],
		    link  = atual[1],
		    nome  = atual[0];
		var tagLi = document.createElement('li'),
		    tagA  = document.createElement('a'),
		    menu  = document.getElementById('menu');
		$(tagA).html(nome).attr('href', link+'.html').appendTo(tagLi);
		$(tagLi).appendTo(menu);
	}

	// Verificação página ativa
	var body = $('body').attr('class');
	$('.menu li a[href^="'+body+'"]').addClass('selected');

});
