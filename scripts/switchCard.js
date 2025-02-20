let currentIndex = 0;

function updateCard() {
	if (!window.sharedData) return;

	const cardCase = document.getElementById("cardCase");
	const currentData = window.sharedData[currentIndex];
	console.log(currentData);
	cardCase.innerHTML = `
    				<img
					src="${currentData.image}"
					id="card-image"
					alt="MBTI"
				/>
				<div id="card-body">
					<p id="card-title">${currentData.title}</p>
					<p id="card-text">
						${currentData.content}
					</p>
        </div>
    `;
}

document.getElementById('prevBtn').addEventListener('click', () => {
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
