jQuery(document).ready(function($) {
   
   // Menu mobile
   $('#call-menu').on('click', function(event){
      event.preventDefault();
      $(this).next('#main-menu').slideToggle();
   });

});

// function load() {
//    var callMenu = document.getElementById('call-menu'); 
//    callMenu.addEventListener('click', modifyMenu, false);
// }

// function modifyMenu() {
//    var menu = document.getElementById('main-menu');
//    alert('teste');
// }

// document.addEventListener("DOMContentLoaded", load, false);