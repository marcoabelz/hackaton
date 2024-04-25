// let data = dummyData;

// let title = document.getElementById("name");
// let category = document.getElementById("category");
// let year = document.getElementById("year");
// let img = document.getElementById("img");
// let link = document.getElementById("link");
// let actors = document.getElementById("actors");

let newDatas = null;

// Selector
let titleSelector = document.getElementById("title");
let categorySelector = document.getElementById("category");
let yearSelector = document.getElementById("year");
let imgSelector = document.getElementById("img");
let linkSelector = document.getElementById("link");
let actorsSelector = document.getElementById("actors");

//harus terpanggil 1x ketika web di refresh
listMovies(datas);

// Read
function listMovies(movies) {
  let wadah = document.getElementById("wadah");
  let keyword = document.getElementById("keyword");
  keyword.innerHTML = "";

  wadah.innerHTML = "";

  for (let perMovies of movies) {
    let { id, name, category, year, img, link, actors } = perMovies;

    let verString = "";
    for (let char of actors) {
      verString += `${char} `;
    }

    wadah.innerHTML += `<div class="kartu">
    <p id="title">${name}</p>
    <p id="category">${category}</p>
    <p id="year">${year}</p>
    <img src="${img}" alt="${name}" />
    <a href="${link}" target="_blank">Youtube ${name}</a>
    <p id="actors">${verString}</p>
    <button>Edit</button>
    <button>Delete</button> 

  </div><br><br>`;
  }
}

// Search
function findMovies() {
  let result = [];

  let keywordSelector = document.getElementById("keyword").value;

  //coba pake for of

  result = datas.filter((el) =>
    el.name.toLowerCase().includes(keywordSelector.toLowerCase())
  );

  listMovies(result);
}

//RESET
function reset() {
  listMovies(datas);
}

function deleted(id) {
  if (newArray === null) {
    for (let data of datas) {
    }
  } else {
    for (let data of newDatas) {
    }
  }
}
