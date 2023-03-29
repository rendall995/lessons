const swiper = new Swiper('.swiper', {
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	spaceBetween: 30,
});