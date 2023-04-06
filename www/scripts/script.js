$(document).ready(function () {


  $('.j-burger').on('click', function () {
    $('.j-main-menu').toggleClass('is-open');
  });


  // Аккордеоны 1
  let prevAccordionBtn = undefined;

  $('.j-accordion-btn').on('click', function () {

    if (prevAccordionBtn === this) {
      $(this).next().slideToggle();
    } else {
      $(prevAccordionBtn).next().slideUp();
      $(this).next().slideDown();
      prevAccordionBtn = this;
    }

  });


  // Табы
  $('.j-contacts-link').on('click', function () {
    let index = $(this).index('.j-contacts-link');

    $('.j-contacts-link').removeClass('active');
    // $('.j-contacts-link').eq(index).addClass('active');
    // Аналог:
    $(this).addClass('active');

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');

  });


  // Фильтр в наших работах
  $('.j-works-link').on('click', function () {
    $('.j-works-link').removeClass('active');
    $(this).addClass('active');

    let dataFilter = $(this).data('filter');

    if (dataFilter === 'all') {
      $('.j-works-item').show();
      return;
    }

    // Внутри each - свой собственный this
    $('.j-works-item').each(function () {
      let dataType = $(this).data('type');

      if (dataFilter === dataType) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })

  });


  // Ajax запрос отывов
  $('.j-reviews-btn').on('click', function () {
    let thisBtn = this;
    
    $(thisBtn).addClass('btn-sending');
    $(thisBtn).attr('disabled', 'disabled');

    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: {
        count: 2
      },
      success: function (responce) {
        $(thisBtn).removeClass('btn-sending');
        $(thisBtn).removeAttr('disabled');
        let htmlStr = createHtmlString(responce);
        addToPage(htmlStr);
      },
      error: function (error) {
        console.log(error);
      }
    });



  });

  function createHtmlString(data) {
    let htmlString = '';
    let reviewsArray = data.reviews;
    
    reviewsArray.forEach(function(review) {
      htmlString = htmlString + `<div class="reviews-item">
      <img src="${review.imgUrl}" alt="${review.imgAlt}" class="reviews-ava" />
      <div class="reviews-text">
        <strong class="reviews-name">${review.name}</strong>
        <blockquote class="reviews-quote">
          “${review.text}”
        </blockquote>
      </div>
    </div>`;
    });

    return htmlString;
  }

  function addToPage(str) {
    $('.j-reviews-wrap').append(str);
  }


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
