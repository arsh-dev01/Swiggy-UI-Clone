let searchIcon = document.querySelector(".section > button.searchbtn");
let cancelIcon = document.querySelector(".section > button.cancelhbtn");
let searchBox = document.querySelector(".section > input");
let typingTimer;
searchBox.addEventListener("keypress", () => {
  if (searchBox.value != "") {
    if (searchIcon.style.display != "none") {
      searchIcon.style.display = "none";
      cancelIcon.style.display = "inline";
    }
  }
  searchBox.addEventListener("keydown", function () {
    clearTimeout(typingTimer);
  });
  typingTimer = setTimeout(() => {
    foo();
  }, 600);
});
searchBox.addEventListener("change", () => {
  if (searchBox.value == "") {
    if (searchIcon.style.display == "none") {
      searchIcon.style.display = "inline";
      cancelIcon.style.display = "none";
    }
  }
});
cancelIcon.addEventListener("click", () => {
  searchBox.value = "";
  if (searchBox.value == "") {
    if (searchIcon.style.display == "none") {
      searchIcon.style.display = "inline";
      cancelIcon.style.display = "none";
    }
  }
});

let obj;
async function foo() {
  let ULR = `https://themealdb.com/api/json/v1/1/search.php?s=+${searchBox.value}`;
  // let ULR = "../hello.json";
  const res = await fetch(ULR);
  console.log("Funciton calling");

  obj = await res.json();
  console.log(obj);

  obj.meals.forEach((element) => {
    console.log(element["strMealThumb"]);
    console.log(element["strMeal"]); //Title
    console.log(element["strCategory"]); //Type
    GenratingElementandAppend(
      element["strMealThumb"],
      element["strMeal"],
      element["strCategory"]
    );
  });
}

function GenratingElementandAppend(ImageURL, title, type) {
  // Createing Element
  let div = document.createElement("div");
  let Images = document.createElement("img");
  let Container = document.createElement("div");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  // Add Class In created Element
  div.classList.add("box");
  h3.classList.add("title");
  h4.classList.add("type");
  // Adding extra Attribute and InnerHTML
  Images.setAttribute("src", ImageURL);
  h3.innerHTML = title;
  h4.innerHTML = type;
  // Appending Child
  div.appendChild(Images);
  div.appendChild(Container);
  Container.appendChild(h3);
  Container.appendChild(h4);
  // all Element are Appending
  document.querySelector(".itemsection").appendChild(div);
}
