if (window.jQuery) {
	$(document).ready(function () {
		// Add smooth scrolling to all links
		$("header nav a").on("click", function (event) {
			console.log("saki");
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$("html, body").animate(
					{
						scrollTop: $(hash).offset().top - 80,
					},
					800,
					function () {
						window.location.hash = hash;
					}
				);
			}
		});

		// Sticky header
		$(window).scroll(function () {
			var header = $("header"),
				scroll = $(window).scrollTop();

			if (scroll >= 200) {
				header.addClass("fixed");
			} else {
				header.removeClass("fixed");
			}
		});

		// Mobile menu trigger
		$("#mobile-menu-trigger").on("click", function () {
			$(this).toggleClass("open");
			$("header nav").animate({ width: "toggle" }, 350);
		});
	});
}
