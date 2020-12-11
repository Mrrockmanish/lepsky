$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7 (999) 999 99 99");
  
  $('.offer-area__carousel').slick({
    appendArrows: $('.offer-area__arrows'),
    prevArrow: '<div class="offer-area__arrow offer-area__arrow_prev">\n' +
      '              <svg width="37" height="12" viewBox="0 0 37 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '                     <path d="M0.453094 5.45309C0.151043 5.75514 0.151043 6.24486 0.453094 6.54691L5.37526 11.4691C5.6773 11.7711 6.16702 11.7711 6.46907 11.4691C6.77112 11.167 6.77112 10.6773 6.46907 10.3753L2.09381 6L6.46907 1.62474C6.77112 1.3227 6.77112 0.83298 6.46907 0.530931C6.16702 0.228883 5.6773 0.228883 5.37526 0.530931L0.453094 5.45309ZM37 5.22656L1 5.22656V6.77344L37 6.77344V5.22656Z" fill="white"/>\n' +
      '               </svg>\n' +
      '           </div>',
    nextArrow: '<div class="offer-area__arrow offer-area__arrow_next">\n' +
      '              <svg width="37" height="12" viewBox="0 0 37 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '                     <path d="M36.5469 6.54691C36.849 6.24486 36.849 5.75515 36.5469 5.4531L31.6247 0.530937C31.3227 0.228889 30.833 0.228889 30.5309 0.530937C30.2289 0.832985 30.2289 1.3227 30.5309 1.62475L34.9062 6.00001L30.5309 10.3753C30.2289 10.6773 30.2289 11.167 30.5309 11.4691C30.833 11.7711 31.3227 11.7711 31.6247 11.4691L36.5469 6.54691ZM-1.35233e-07 6.77344L36 6.77345L36 5.22656L1.35233e-07 5.22656L-1.35233e-07 6.77344Z" fill="white"/>\n' +
      '               </svg>\n' +
      '         </div>',
    fade: true
  });

  $('.grid').masonry({
    itemSelector: '.grid-item'
  });


  $('.products-carousel').slick({
    slidesToScroll: 4,
    slidesToShow: 4,
    appendArrows: $('.small-arrows'),
    prevArrow: '<div class="small-arrows__arrow small-arrows_prev">\n' +
      '              <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '                     <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35356L3.82843 7.53554C4.02369 7.7308 4.34027 7.7308 4.53553 7.53554C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976312 4.7308 0.65973 4.53553 0.464468C4.34027 0.269205 4.02369 0.269205 3.82843 0.464468L0.646446 3.64645ZM17 3.5L1 3.5L1 4.5L17 4.5L17 3.5Z" fill="white"/>\n' +
      '              </svg>\n' +
      '          </div>',
    nextArrow: '<div class="small-arrows__arrow small-arrows_next">\n' +
      '               <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      '                      <path d="M16.3536 4.35356C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464468C12.9763 0.269206 12.6597 0.269206 12.4645 0.464468C12.2692 0.65973 12.2692 0.976313 12.4645 1.17158L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53554C12.6597 7.7308 12.9763 7.7308 13.1716 7.53554L16.3536 4.35356ZM-8.74228e-08 4.5L16 4.5L16 3.5L8.74228e-08 3.5L-8.74228e-08 4.5Z" fill="white"/>\n' +
      '               </svg>\n' +
      '         </div>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ],
    infinite: false
  });


  // отображаем изображения и информацию по активному артисту
  const showArtist = (artistItem) => {

    if (artistItem.length > 0) {
      const activeItem = artistItem.find('.artists__list li.active');
      const bg = activeItem.data('bg');
      const img = activeItem.data('preview');
      const band = activeItem.data('band');
      const guitarsArr = () => activeItem.data('guitars').split(',');
      const guitars = guitarsArr();

      artistItem.css(
        'background-image', 'linear-gradient(90deg, #2C2C2C 8.72%, rgba(44, 44, 44, 0.6) 86.66%),' + 'url(' + bg + ')'
      );
      artistItem.find('.artist-item__img').css(
        'background-image', 'url(' + img + ')'
      );
      artistItem.find('.artist-item__band').text(band);

      guitars.forEach((element) => {
        $('.artist-item__guitars').append(element + '<br>');
      });
    }
  };

  showArtist($('.artist-item'));

  // console.log($('.artist-item'));

  // переключаем артистов
  $('.artist-item').on('click', '.artists__list li:not(active)', function (){
    const artistItem = $(this).closest('.artist-item');
    $(this).closest('.artist-item').find('li.active').removeClass('active');
    $(this).addClass('active');
    $('.artist-item__guitars').text('');
    showArtist(artistItem);
  });

  // галерея

  const gallery = (galleryEl, delegateSelector) => {
    galleryEl.each(function (){
      $(this).magnificPopup({
        delegate: delegateSelector,
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    })
  };

  gallery($('.process-block'), 'a');
  gallery($('.models-gallery'), 'a');

  // отображаем названия прикреплённых файлов
  $('.form-textarea__input').on('change', function (){
    $('.form-textarea__files').text('');
    const files = document.getElementById('input-file').files;

    const names = Object.entries(files).map(([other, {name}]) => name)
      .forEach((item) => {
        $('.form-textarea__files').append(`<div class="px-2">${item}</div>`);
      })
  });

  $('.buy').on('click', function () {
    $('.buy-modal').arcticmodal();
  });

  $('.order').on('click', function () {
    $('.order-modal').arcticmodal();
  });

  $('.info-call').on('click', function () {
    $('.info-modal').arcticmodal();
  });

  // задаём высоту для видео
  const setHeightVideo = (iframeSelector) => {
    const width = $(iframeSelector).width();
    $(iframeSelector).height(width*0.5625);
  };
  setHeightVideo('.video-item__iframe');
  setHeightVideo('.videos-right__iframe');

  $(window).resize(function (){
    setHeightVideo('.video-item__iframe');
    setHeightVideo('.videos-right__iframe');
  });


  // $('.custom-item').on('click', '.custom-item__caption', function () {
  //   $(this).next('.custom-item__content').fadeToggle();
  // });

  const customCalc = () => {
    const customItem = $('.custom-item').find('[data-price]:checked').toArray();
    const pricesSum = customItem.map((item) => item.getAttribute('data-price'))
      .reduce((acc, current) => {
        return acc + Number(current);
      }, 0);
    $('.steps__price').text(pricesSum);
  };

  customCalc();

  $('.steps').on('change', 'input', function (){
    customCalc();
  })

  // табы
  $('.custom-tabs').on('click', '.custom-tabs__tab:not(.active)', function (){
    const current = $(this).data('tab');
    $(this).closest('.custom-tabs').find('.custom-tabs__tab.active').removeClass('active');
    $(this).addClass('active');

    $(this).closest('.custom-tabs').find('.custom-tabs__content.active').removeClass('active').hide();
    $(this).closest('.custom-tabs').find(`.custom-tabs__content[data-tab="${current}"]`).addClass('active').fadeIn();
  })



  $('[data-model]').on('change', function (){
    $(this).closest('.steps').prev('.params-filter').hide();
    $(this).closest('.step-one').hide();
    $(this).closest('.step-one').next('.step-two').fadeIn();
  });

  // ездиющий блок
  const slideBlock = (endPositionBlockSelector, slideBlockSelector) => {
    // Получаем позицию на которой заканчивается скольжение.
    // Нужно взять расстояние от блока на котором заканчивается скольжение до верха документа,
    // отнять высоту скользяшего блока, отнять расстояние от блока в котором лежит скользяший блок до верха документа,
    // отнять позицию с которой наченается скольжение

    if ($(endPositionBlockSelector)[0] !== undefined) {
      const endPosition = $(endPositionBlockSelector).offset().top - $(slideBlockSelector).outerHeight() - $('#guitar-content').offset().top + 100;
      // 100 это позиция прокрутки с которой блок начинает движение
      $(window).scroll(function (){
        if ($(window).scrollTop() >= endPosition) {
          $(slideBlockSelector).css({
            'position': 'relative',
            'top': `${endPosition - 100}px`
          });
        } else if ($(window).scrollTop() < endPosition && $(window).scrollTop() > 100) {
          $(slideBlockSelector).css({
            'position': 'fixed',
            'top': `${$('#guitar-content').offset().top - 100}px`
          });
        } else if ($(window).scrollTop() < 100) {
          $(slideBlockSelector).css({
            'position': 'static',
          });
        }
      });
    }
  };

  slideBlock('.endPosition', '.specifications');

  // проигрываем видео в live-videos
  const playVideos = () => {
    const firstVideoSrc = $('.videos-item')[0].getAttribute('data-video');
    $('.videos-right iframe').attr('src', firstVideoSrc);

    $('.videos-item').on('click', function (){
      const dataVideo = $(this).data('video');
      $('.videos-right iframe').attr('src', dataVideo).trigger('click');
    });

  };

  if ($('.videos-item')[0] !== undefined) {
    playVideos();
  }

  // видео в попапе
  $('.video-link').magnificPopup({
    type: 'iframe'
  });

  // красивый сролл

  const beautyScroll = (element) => {
    const content = element;
    const Scrollbar = window.Scrollbar;

    Scrollbar.init(content, {
      alwaysShowTracks: true,
      continuousScrolling: false
    });
  };

  if ($('.videos-left__inner')[0]) {
    beautyScroll($('.videos-left__inner')[0]);
  }

  //мобильное меню

  $('.bars').on('click', function (){
    $('.mobile-menu').fadeIn();
    $('body').addClass('overflow-hidden');
  });

  $('.mobile-menu__close').on('click', function (){
    $('.mobile-menu').fadeOut();
    $('body').removeClass('overflow-hidden');
  })

});