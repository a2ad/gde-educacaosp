jQuery(document).ready(function($) {
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

   var $window = $(window);
   window.prettyPrint && prettyPrint();

});