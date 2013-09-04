jQuery(document).ready(function($) {

	// Retira classe preload para iniciar animações CSS3
   // $('.animate').one('mouseover', function() {
   //    $(this).removeClass('preload');      
   // });

	var anima = $('.preload'),
	    conju = [];
	for( var i =0; i < anima.length; i++ ) {
		var current = $(anima[i]),
			 passo   = current.data('animation'),
		    topo    = current.offset().top,
		    proximo = conju.length,
		    objeto  = {};

		    objeto.secao = passo;
		    objeto.distancia = topo;

		conju[proximo] = objeto;
	}

	//console.log(conju);	

	$(window).on('scroll', function(event){
      // Armazena variaveis da janela e distancia do topo
      var janela = $(window),
      	 altura = janela.height(),
          topo = janela.scrollTop();

      for( var i = 0; i < conju.length; i++ ) {
			if( topo > conju[i].distancia / 2 ) {
				$('.gde-' + conju[i].secao).removeClass('preload');
			}			
		}

   });

   // Verifica IE7 / 8
   if( $('html').hasClass('ie8') || $('html').hasClass('ie7') ) {
      if( $('body').hasClass('homepage') ) {
         function alertBrowser() {
            $('<div>', {
               "class": "gde-alert"
            }).prependTo('body');
            $('<p>', {
               "html": "O seu navegador está <strong>desatualizado</strong>. Por essa razão, pode ser que você não consiga visualizar corretamente algumas funcionalidades do projeto!"
            }).appendTo('.gde-alert');
            $('<a>', {
               "text": "x",
               "class": "close"
            }).appendTo('.gde-alert');

            $('.close').click(function(event){
               event.preventDefault();
               $(this).closest('.gde-alert').fadeOut('slow', function() {
                  $(this).remove();
               });
            });
         }
         alertBrowser();
      }
   }

});