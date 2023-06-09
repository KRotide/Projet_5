const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const imageElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector("#banner p");
const prev = document.querySelector(".arrow_left");
const next = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
let dots = [];

function showSlide(slideIndex) {
	const slide = slides[slideIndex];
	imageElement.src = slide.image;
	tagLineElement.innerHTML = slide.tagLine;
}

function createDots(dotsContainer) {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("li");
		dot.addEventListener("click", () => {
			currentSlide = i;
			showSlide(currentSlide);
			updateDots(currentSlide);
		});
		dotsContainer.appendChild(dot);
		dot.classList.add("dot");
		dots.push(dot);
	}
}

createDots(dotsContainer);

function updateDots(slideIndex) {
	dots.forEach((dot) => dot.classList.remove("dot_selected"));
	dots[slideIndex].classList.add("dot_selected");
}

prev.addEventListener("click", () => {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
	updateDots(currentSlide);
});

next.addEventListener("click", () => {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
	updateDots(currentSlide);
});

showSlide(currentSlide);
updateDots(currentSlide);

const divBanner = document.querySelector("#banner");
divBanner.appendChild(imageElement);
divBanner.appendChild(tagLineElement);

