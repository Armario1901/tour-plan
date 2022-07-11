$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    speed: 600,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    speed: 450,
    autoHeight: true,
  });

  ymaps.ready(init);

  function init() {
    let myMap = new ymaps.Map("ymap", {
        center: [7.600718063693838, 80.3957768366155],
        zoom: 8,
      }),
      myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        // Создаем геообъект с типом геометрии "Точка".
        geometry: {
          type: "Point",
          coordinates: [7.621135952430718, 79.78328910744702],
        },
      });
    myMap.geoObjects.add(myGeoObject);
  }

  $(".newsletter").parallax({
    imageSrc: "img/newsletter-bg.jpg",
    speed: 0.6,
  });

  const mobileBtn = $(".menu-btn");
  const anyLink = $(".navbar-menu__item");
  function openClose() {
    $(".navbar-bottom").toggleClass("navbar-bottom__visible");
    $("body").toggleClass("lock");
    $(".menu-btn__line").toggleClass("menu-open");
  }
  anyLink.on("click", function (){
    openClose();
  });
  mobileBtn.on("click", function () {
    openClose();
  });

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $("modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    let modalOverlay = $(".modal__overlay");
    let modalWindow = $(".modal__window");
    modalOverlay.addClass("modal__overlay--visible");
    modalWindow.addClass("modal__window--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalWindow = $(".modal__window");
    modalOverlay.removeClass("modal__overlay--visible");
    modalWindow.removeClass("modal__window--visible");
  }

  // закрытие формы по кнопке escape
  $(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      let modalOverlay = $(".modal__overlay");
      let modalWindow = $(".modal__window");
      modalOverlay.removeClass("modal__overlay--visible");
      modalWindow.removeClass("modal__window--visible");
    }
  });

  // $(".form").validate({
  // валидация формы
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters long",
        },
        phone: {
          required: "We need your phone number to contact you",
          minlength: "Your phone must be 11 digits long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
    // валидация маски телефона
    $(document).ready(function () {
      $(".input-phone").mask("+7 (000) 000-00-00");
    });
  });
  // подключение анимаций
  AOS.init();
}); //проверка на готовность функций (не удалять закрывающие скобки)
