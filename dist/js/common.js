(function ($) {
	$(document).ready(function () {

		var $scrollPos = 0;
		$(window).scroll(function () {
			var $st = $(this).scrollTop();
			if ($st > $scrollPos) {
				// Скролл Вниз
				$('.header').addClass('scroll');
			} else {
				// Скролл Вверх
			}
			if ($st == 0) {
				$('.header').removeClass('scroll');
			}
			$scrollPos = $st;
		});

		$('.mainblock .slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 1000,
			cssEase: 'ease',
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
		});

		$(document).on('click', '.header .lang', function () {
			$(this).find('.lang-list').slideToggle();
		});

		function showSearch() {
			$('.header .search').addClass('active');
			$('.header .tels').addClass('hide');
		}
		function hideSearch() {
			$('.header .tels').removeClass('hide');
			$('.header .search').removeClass('active');
		}

		$(document).on('mouseover', '.header .search', function() {
			showSearch();
		});
		$(document).on('mouseout', '.header .search', function() {
			if($(this).find('input').is(':focus')) {
				// если уводим мылшку и он в фокусе
			} else {
				// если уводим мылшку и он не в фокусе
				hideSearch();
			}
		});

		$('.header .search input').focus(function() {
			showSearch();
		});
		$('.header .search input').blur(function() {
			hideSearch();
		});
		
		

		// $(document).on('click', '.form__label', function() {
		// 	$(this).addClass('hide');
		// });
		// $(document).on('focus', '.form__input', function() {
		// 	$(this).parent('.form-item').find('.form__label').addClass('hide');
		// });
		// $(document).on('blur', '.form__input', function() {
		// 	$(this).parent('.form-item').find('.form__label').removeClass('hide');
		// });

		$(document).on('click', '.competitions .btns a', function (e) {
			e.preventDefault();
			$('.competitions .btns a').removeClass('active');
			$(this).addClass('active');
			var id = $(this).data('id');

			$('.competitions .inner').each(function () {
				if ($(this).data('id') == id) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});
			$('.competitions .caption__text').each(function () {
				if ($(this).data('id') == id) {
					$(this).addClass('active');
				} else {
					$(this).removeClass('active');
				}
			});
		});

		$('.popup-link').magnificPopup({
			type: 'inline',
			focus: 'input',
			showCloseBtn: true,
			alignTop: false,
			fixedContentPos: true
		});

		$('select').niceSelect();

		$('input[type="tel"]').inputmask({
			mask: "+99 (999) 999-99-99",
			greedy: false
		});

		$('.partners .slider').slick({
			arrows: true,
			dots: true,
			slidesToShow: 4,
			prevArrow: '<button class="icon-arrow2 left"></button>',
			nextArrow: '<button class="icon-arrow2 right"></button>',
			slidesToScroll: 1,
			infinite: true,
			rows: 3,
			responsive: [{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]
		});

		$(document).on('click', '.burger', function () {
			if (!$(this).hasClass('active')) {
				$('.header .menu').addClass('active');
				$('body').addClass('hidden');
				$(this).addClass('active');
			} else {
				$('.header .menu').removeClass('active');
				$('body').removeClass('hidden');
				$(this).removeClass('active');
			}
		});

		$(document).on('click', '.anchor', function (e) {
			var fixed_offset = 50;
			$('html, body').stop().animate({
				scrollTop: $(this.hash).offset().top - fixed_offset
			}, 500);
			e.preventDefault();
		});

		$('.year-list').hide();
		$(document).on('click', '.year__title', function (e) {
			$(this).toggleClass('active');
			$(this).next('.year-list').slideToggle();
		});
		$(document).on('click', '.year-list li', function (e) {
			var year = $(this).data('year');
			$(this).parent('.year-list').slideToggle();
			$('.year__title span').text(year);
			$('.year__title').toggleClass('active');

			$('.news .inner').each(function (e) {
				if ($(this).data('year') == year) {
					$('.news .inner').hide();
					$(this).show();
				}
			});
		});

		$('.spoiler-list').hide();
		$(document).on('click', '.spoiler__title', function (e) {
			$(this).toggleClass('active');
			$(this).next('.spoiler-list').slideToggle();
		});

		$(document).on('click', '.information-menu a', function (e) {
			e.preventDefault();
			var tab = $(this).data('id');
			$('.information-menu a').removeClass('active');
			$(this).addClass('active');

			$('.information .text-container').each(function (e) {
				if ($(this).data('id') == tab) {
					$('.information .text-container').hide();
					$(this).show();
				}
			});
		});

		$('.map-block').on('mouseover', function () {
			$('.map-block').removeClass('active');
			$(this).addClass('active');
		});
		$('.contact .item').on('mouseover', function () {
			$('.contact .item').removeClass('active');
			$(this).addClass('active');
		});

	});
})(jQuery);