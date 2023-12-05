$(document).ready(function () {
  var slider = $('#slick-demo');

  slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0,
        }
      }
    ]
  });

  $('#prevBtn').click(function () {
    slider.slick('slickPrev');
  });

  $('#nextBtn').click(function () {
    slider.slick('slickNext');
  });

  // chuyen dong auto item ma khong giat
  $('.creadit_bt').slick({
    slidesToShow: 3, // Số lượng item hiển thị trên mỗi slide
    slidesToScroll: 1, // Số lượng item chuyển đổi khi bạn nhấp vào nút chuyển tiếp/lùi
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 0, // Thời gian chuyển slide (ms)
    speed: 5000,      //toc do troi
    cssEase: "linear",
    pauseOnDotsHover: true,
    arrows: false, // Ẩn nút chuyển động
    dots: false, // Hiển thị các chấm chuyển động

  });
});


// var swiper1 = new Swiper(".mySwiper2", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper2,
//   },
// });

// var swiper2;

// function initializeSwiper2() {
//   swiper2 = new Swiper(".mySwiper", {
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//   });
// }

// initializeSwiper2();

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


//select 2
$(document).ready(function() {
  $(".js-select2").select2({
    closeOnSelect: false
  });
});





