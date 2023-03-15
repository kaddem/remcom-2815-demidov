$(document).ready(function() {


  $('.j-burger').on('click', function() {
    $('.j-main-menu').toggleClass('is-open');
  });


  $('.j-main-menu a').on('click', function() {
    console.log('clickkkkk');
  });

  let textLogo = $('.header-logo').html('<u>UUURRRR</u><script>alert("гони бабки! Твой комп заражен!");</script>');

  console.log(textLogo);

  console.log($('.j-main-menu'));

});










// let burger = document.querySelector('.j-burger');
// let isMenuClose = true;

// burger.addEventListener('click', function() {

//   let menu = document.querySelector('.j-main-menu');

//   if (isMenuClose) {
//     // menu.style.display = 'block';
//     menu.classList.add('is-open');
//     isMenuClose = false
//   } else {
//     // menu.style.display = 'none';
//     menu.classList.remove('is-open');
//     isMenuClose = true
//   }

// });
