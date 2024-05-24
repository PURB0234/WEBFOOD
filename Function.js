$(document).ready(function() {
      $(".nav-link").click(function() {
         $(this).addClass("animasi");

         setTimeout(() => {
            $(this).removeClass("animasi");
         }, 1000);
      });
   });