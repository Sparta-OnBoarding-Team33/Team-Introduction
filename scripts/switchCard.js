let currentIndex = 0;

function updateCard() {
	if (!window.sharedData) return;

	const cardCase = document.getElementById("cardCase");
	const currentData = window.sharedData[currentIndex];
	console.log(currentData);

	document.getElementById("card-image").src = currentData.image;
	document.getElementById("card-title").innerText = currentData.title;
	document.getElementById("card-text").innerText = replaceBrWithNewline(
		currentData.content
	);
}

document.getElementById("prevBtn").addEventListener("click", () => {
	if (!window.sharedData) return;
	if (currentIndex === 0) {
		currentIndex = window.sharedData.length - 1;
	}
	currentIndex = (currentIndex - 1) % window.sharedData.length;
	updateCard();
});

document.getElementById("nextBtn").addEventListener("click", () => {
	if (!window.sharedData) return;
	currentIndex = (currentIndex + 1) % window.sharedData.length;
	updateCard();
});

document.addEventListener("dataLoaded", (event) => {
	window.sharedData = event.detail;
	updateCard();
});
