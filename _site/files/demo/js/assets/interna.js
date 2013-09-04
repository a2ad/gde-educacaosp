// Prettyprint
function startPretty() {
   var $window = $(window);
   window.prettyPrint && prettyPrint();
}

jQuery(document).ready(function($) {

   $('.gde-demo').each(function(){
      html = $(this).html();

      while (html !=(html = html.replace('<', '&lt;')));
      while (html !=(html = html.replace('>', '&gt;')));
      //while (html !=(html = html.replace('   ', '')));

      if( $(this).hasClass('dependencies') ) {
         $(this).after('<pre class="prettyprint linenums">&lt;!-- Dependências --&gt;</pre>');   
      } else {
         $(this).after('<pre class="prettyprint linenums">&lt;!-- HTML --&gt;</pre>');
      }
      
      $(this).next('pre').append(html);
   });   

   startPretty();

   // Calcula distancia entre menu e topo
   function distMenu() {
      var menu = $('#gde-menu');
          dist = menu.offset().top;

      return dist;
   }
   distMenu();

   $(window).on('scroll', function(event){
      // Armazena variaveis da janela e distancia do topo
      var janela = $(window),
          topo = janela.scrollTop();
      
      if( topo > dist ) {
         $('#gde-menu').addClass('gde-fixed');
      } else {
         $('#gde-menu').removeClass('gde-fixed');
      }
      
   });

});