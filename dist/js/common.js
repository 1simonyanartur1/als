(function ($) {
	$(document).ready(function () {

		var $scrollPos = 0;
		$(window).scroll(function () {
			var $st = $(this).scrollTop();
			if ($st > $scrollPos) {
				// Скролл Вниз
				$('.header').addClass('scroll');
				// $('.to-top').removeClass('show');
			} else {
				// Скролл Вверх
				// $('.header').removeClass('scroll');
				// $('.to-top').addClass('show');
			}
			if ($st == 0) {
				$('.header').removeClass('scroll');
				// $('.to-top').removeClass('show');
			}
			$scrollPos = $st;
		});

		$('.mainblock .slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
		});

		$(document).on('click', '.header .lang', function () {
			$(this).find('.lang-list').slideToggle();
		});

		$('select').niceSelect();

		$('input[type="tel"]').inputmask({
			mask: "+99 (999) 999-99-99",
			greedy: false
		});

		$('.partners .slider').slick({
			arrows: true,
			dots: true,
			slidesToShow: 3,
			prevArrow: '<button class="icon-arrow2 left"></button>',
			nextArrow: '<button class="icon-arrow2 right"></button>',
			slidesToScroll: 1,
			infinite: false,
			rows: 3,
			responsive: [
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		});

		$(document).on('click', '.burger', function () {
			if (!$(this).hasClass('active')) {
				$('.header .menu').slideDown();
				$(this).addClass('active');
			} else {
				$('.header .menu').slideUp();
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

	});
})(jQuery);