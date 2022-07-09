let url = "https://picsum.photos/v2/list?limit=100";

async function generateImage(url) {
  const response = await fetch(url);
  return response.json();
}

document.body.onload = generateImage(url).then((data) => {
  console.log(data);
  showImage(data);
});

function showImage(data) {
  let i = Math.floor(Math.random() * 101);

  const imageDiv = document.getElementById("app");

  const randomImage = document.createElement("img");
  const dataURL = data[i].download_url;
  randomImage.src = dataURL;

  const randomAuthor = document.createElement("h1");
  const dataAuthor = data[i].author;
  randomAuthor.innerHTML = "Image Author: " + dataAuthor;

  const randomID = document.createElement("h2");
  const dataID = data[i].id;
  randomID.innerHTML = "Image ID: " + dataID;

  imageDiv.appendChild(randomImage);
  imageDiv.appendChild(randomAuthor);
  imageDiv.appendChild(randomID);

  console.log(i);
}
