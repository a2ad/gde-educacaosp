jQuery(document).ready(function($) {
   //Links externos
   // $("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])").attr("target","_blank").addClass("external");

   // 'Acendendo' item do menu ativo
   function menuAtivo() {
      // Guardando classes do elemento body em um Array
      var classesBody = $('body').attr('class').split(/\s+/),
      // Armazenando categoria da página
      sectionPage = classesBody[0],
      // Armazenando menu
      menu = document.getElementById('styleguide-menu'),
      // Armazenando item do menu relativo ao tipo de página
      itemMenu = $(menu).children('.menu-'+sectionPage);

      // Verificando se a página é de abertura
      if( classesBody[1] == 'opening' ) {
         $(itemMenu).addClass('active');
      } else {
         // Armazenando texto do título da página
         var titlePage = $('.title-page').text(),
         // Armazenando itens do submenu do item relacionado à página
         itensMenu = $(itemMenu).find('.styleguide-submenu').children();
         // Percorrendo itens do submenu
         for (var i = 0; i < itensMenu.length; i++) {
            // Armazenando item ativo no loop
            var current = itensMenu[i],
            // Armazenando texto do link do item ativo no loop
               textLink = $(current).children('a').text();

            // Verificando se o texto do link é igual ao título da página e adicionando classe
            if( textLink == titlePage ) {
               $(current).addClass('active');
            }
         };
      }
   }

   // Verifica se menu existe para rodar função de 'acender' item ativo
   if( $('#styleguide-menu').length ) {
      menuAtivo();
   }

   $('.styleguide-demo').each(function(){
      html = $(this).html();

      while (html !=(html = html.replace('<', '&lt;')));
      while (html !=(html = html.replace('>', '&gt;')));
      //while (html !=(html = html.replace('   ', '')));


      $(this).after('<pre class="prettyprint linenums">&lt;!-- HTML --&gt;</pre>');
      $(this).next('pre').append(html);
   });

   //Prettyprint
   var $window = $(window);
   window.prettyPrint && prettyPrint();

   // Verifica IE7 / 8
   if( $('html').hasClass('ie8') || $('html').hasClass('ie7') ) {
      if( $('body').hasClass('homepage') ) {
         function alertBrowser() {
            $('<div>', {
               "class": "styleguide-alert"
            }).prependTo('body');
            $('<p>', {
               "html": "O seu navegador está <strong>desatualizado</strong>. Por essa razão, pode ser que você não consiga visualizar corretamente algumas funcionalidades do projeto!"
            }).appendTo('.styleguide-alert');
            $('<a>', {
               "text": "x",
               "class": "close"
            }).appendTo('.styleguide-alert');

            $('.close').click(function(event){
               event.preventDefault();
               $(this).closest('.styleguide-alert').fadeOut('slow', function() {
                  $(this).remove();
               });
            });
         }
         alertBrowser();
      }
   }

});