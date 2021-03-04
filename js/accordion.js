const accordion = document.getElementsByClassName("accordion");
const accordionHeader = document.getElementsByClassName("accordion-header");

function toggleItem() {
	if (this.parentElement.classList.contains("active")) {
		this.parentElement.classList.remove("active");
	} else {
		this.parentElement.classList.add("active");
	}
}

for (let i = 0; i < accordionHeader.length; i++) {
	accordionHeader[i].addEventListener("click", toggleItem);
}
