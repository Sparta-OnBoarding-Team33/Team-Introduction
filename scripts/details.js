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
    console.log(userDetails);
    document.getElementById("characterImage").src = userDetails["character-image"];
	} catch (error) {
		console.error(error);
	}
};

getDetails();
