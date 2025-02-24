// api key:eJElrvxTs8hulpIiVFUpJtmBGb7dGbIRVLCxbsww
//
let button = document.getElementById("button");
button.addEventListener("click",getApiData)

let apiData;
function getApiData() {
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=eJElrvxTs8hulpIiVFUpJtmBGb7dGbIRVLCxbsww&count=3`
  )
    .then((response) => response.json())
    .then((data) => {
      apiData = data;
      apiLoop();
    })
    .catch((error) => console.error("Error:", error));
}
let showData = document.getElementById("contain");
function apiLoop() {
  console.log("function ran");

  for (item of apiData) {
    console.log(item);
    let date = item.date;
    let exp = item.explanation;
    let img = item.hdurl;
    let title = item.title;
    let datePara = document.createElement("p");
    datePara.textContent = date;
    showData.appendChild(datePara);
    let exPara = document.createElement("p");
    exPara.textContent = exp;
    showData.appendChild(exPara);
    let newImg = document.createElement("img");
    newImg.src = img;
    showData.appendChild(newImg);
    let titPara = document.createElement("p");
    titPara.textContent = title;
    showData.appendChild(titPara);
  }
}




//declare a new funtion to see the data on the screen
//inside of the function you will loop over the array of objects
//console.log item on the first line in the loop
//for each item you are going to create paragraphs and image elements, and then
//use textContent or other to put the data from the item into the paragraph
