$(function(){

	body = $('body').attr('class');
	$('.menu li a[href^="'+body+'"]').addClass('selected');

	$('.styleguide-demo').each(function(){
		html = $(this).html();

		while (html !=(html = html.replace('<', '&lt;')));
		while (html !=(html = html.replace('>', '&gt;')));
		while (html !=(html = html.replace('              ', '')));

		//console.log(html);
		//html.append('.prettyprint');

		$(this).after('<div class="styleguide-code"><pre class="prettyprint linenums"></pre></div>');
		$(this).siblings('.styleguide-code').children().append(html);

	});
	

	var $window = $(window)
	// make code pretty
	window.prettyPrint && prettyPrint() 

});
