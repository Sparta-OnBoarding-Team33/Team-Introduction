const data = "/data/data.json";

const getDetails = async () => {
	try {
		// parameter로 넘어온 id값을 가져온다.
		const urlParam = new URLSearchParams(window.location.search);
		const id = urlParam.get("id");
		// data.json을 fetch로 가져온다.
		const response = await fetch(data);
		const jsonData = await response.json();
		// id값과 일치하는 사용자를 찾는다.
		const userDetails = Object.values(jsonData).find((user) => user.id === id);
		if (!userDetails) {
			document.body.innerHTML = "<h2>사용자를 찾을 수 없습니다.</h2>";
			return;
		}
		window.sharedData = userDetails.card;

    console.log(userDetails);
		document.getElementById("characterImage").src = userDetails["character-image"];
		document.getElementById("korName").innerText = userDetails.korName;
		document.getElementById("engName").innerText = userDetails.engName;
		document.getElementById("email").innerText = userDetails.email;
		document.getElementById("introduction").innerText = replaceBrWithNewline(userDetails.introduction);
		document.getElementById("blog").href = userDetails.blog;
		document.getElementById("github").href = userDetails.github;
		document.getElementById("home-title").innerText = "33팀 " + userDetails.korName;
		document.dispatchEvent(new CustomEvent('dataLoaded', { detail: window.sharedData }));
		
		console.log(userDetails.card[0])
	} catch (error) {
		console.error(error);
	}
};

const replaceBrWithNewline = (str) => {
  return str.replace(/<br\s*\/?>/gi, '\n');
}

getDetails();
