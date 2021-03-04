const swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 10,
	breakpoints: {
		// when window width is >= 1200px
		650: {
			slidesPerView: 2,
			spaceBetween: 20,
			slidesPerGroup: 2,
		},
		// when window width is >= 1200px
		1100: {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 3,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	}
});
