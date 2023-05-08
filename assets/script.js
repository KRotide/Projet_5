const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow = document.querySelectorAll(".arrow");
arrow.forEach((arrow,index) => {
	arrow.addEventListener("click", () => {
		switch (index) {
			case 0:
				console.log("à gauche");
				break;
			case 1:
				console.log("à droite");
				break;
		}
	});
});