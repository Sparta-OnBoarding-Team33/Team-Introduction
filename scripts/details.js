const data = "/data/data.json";


const getDetails = async (id) => {
  const urlParam = new URLSearchParams(window.location.search);
  const name = urlParam.get("name");

  const response = await fetch(data);
  const jsonData = await response.json();

  const userDetails = Object.values(jsonData).find(user => user.name === name);
  if (!userDetails) {
    document.body.innerHTML = "<h2>사용자를 찾을 수 없습니다.</h2>";
    return;
  }
  console.log(userDetails);
  document.getElementById("name").textContent = userDetails.name;
  document.getElementById("email").textContent = `Email: ${userDetails.email}`;
};

getDetails();
