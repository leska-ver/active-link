document.addEventListener('DOMContentLoaded', function () {
  // console.log(); находит в js-ce ошибку. Deftools


  jQuery(document).ready(function () {
    jQuery('.header__btn').click(function () {
      jQuery('.header__btn').removeClass("active-link");
      jQuery(this).addClass("active-link");
    });
  });



  
});