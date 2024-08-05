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
    console.log("arshnoor");
  }, 400);
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

//   let ser = await fetch()
//     .then((res) => res.json())
//     .then((res) => res);

//   // console.log(User.meals);
// name();

// let ULR = "https://themealdb.com/api/json/v1/1/search.php?s=+cake";
let ULR = "../hello.json";

// let name = async () => {
//   fetch(``)
//     .then((response) => response.json())
//     .then((data) => {
//       outsideVariable = await data;
//     });
// };
// console.log(outsideVariable);
// name();

// let obj;
// async function foo() {
//   const res = await fetch(ULR);
//   console.log("Funciton calling");

//   obj = await res.json();
//   console.log(obj);

//   obj.meals.forEach((element) => {
//     console.log(element["strMealThumb"]);
//     console.log(element["strMeal"]); //Title
//     console.log(element["strCategory"]); //Type
//     GenratingElementandAppend(
//       element["strMealThumb"],
//       element["strMeal"],
//       element["strCategory"]
//     );
//   });
// }

// foo();
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
const url = "https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "01e7d3480dmsh8834eb182ee9e10p17b151jsn6122324cda2f",
    "x-rapidapi-host": "food-recipes-with-images.p.rapidapi.com",
  },
};

try {
  let obj;
  async function foo() {
    const res = await fetch(url, options);
    console.log("Funciton calling");
    obj = await res.json();
    console.log(obj);
  }
  foo();
} catch (error) {
  console.error(error);
}
