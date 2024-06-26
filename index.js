let newDatas = null;

//harus terpanggil 1x ketika web di refresh
listMovies(datas);

function editMovie(id) {
  localStorage.setItem("editID", String(id));

  // let idSelector = document.getElementById("id");
  let titleSelector = document.getElementById("input-title");
  let categorySelector = document.getElementById("input-category");
  let yearSelector = document.getElementById("input-year");
  let castSelector = document.getElementById("input-cast");
  let descSelector = document.getElementById("input-desc");
  let trailerSelector = document.getElementById("input-trailer");
  let imageSelector = document.getElementById("input-link-img");

  for (let data of datas) {
    console.log(data);
    if (data.id === id) {
      titleSelector.value = data.name;
      categorySelector.value = data.category;
      yearSelector.value = data.year;
      castSelector.value = data.actors;
      descSelector.value = data.description;
      trailerSelector.value = data.link;
      imageSelector.value = data.img;
    }
  }
}

function updateData() {
  let currentId = Number(localStorage.getItem("editID"));

  console.log(currentId);

  // let idSelector = document.getElementById("id");
  let titleSelector = document.getElementById("input-title");
  let categorySelector = document.getElementById("input-category");
  let yearSelector = document.getElementById("input-year");
  let castSelector = document.getElementById("input-cast");
  let descSelector = document.getElementById("input-desc");
  let trailerSelector = document.getElementById("input-trailer");
  let imageSelector = document.getElementById("input-link-img");

  // let idValue = Number(idSelector.value);
  let titleValue = titleSelector.value;
  let categoryValue = categorySelector.value;
  let yearValue = yearSelector.value;
  let castValue = castSelector.value;
  let descValue = descSelector.value;
  let trailerValue = trailerSelector.value;
  let imageValue = imageSelector.value;

  let newObj = {
    id: currentId,
    name: titleValue,
    category: categoryValue,
    year: yearValue,
    actors: castValue,
    description: descValue,
    link: trailerValue,
    img: imageValue,
  };

  let newA = [];

  if (newDatas === null) {
    for (let data of datas) {
      // console.log(data);
      if (data.id !== currentId) {
        newA.push(data);
      } else {
        newA.push(newObj);
      }
    }
  } else {
    for (let data of newDatas) {
      // console.log(data);
      if (data.id !== currentId) {
        newA.push(data);
      } else {
        newA.push(newObj);
      }
    }
  }

  if (newA.length) {
    document.getElementById("success").style.display = "block";
  }

  listMovies(newA);
  titleSelector.value = "";
  categorySelector.value = "";
  yearSelector.value = "";
  castSelector.value = "";
  descSelector.value = "";
  trailerSelector.value = "";
  imageSelector.value = "";
}

function createMovie() {
  // let idSelector = document.getElementById("id");
  let titleSelector = document.getElementById("input-title");
  let categorySelector = document.getElementById("input-category");
  let yearSelector = document.getElementById("input-year");
  let castSelector = document.getElementById("input-cast");
  let descSelector = document.getElementById("input-desc");
  let trailerSelector = document.getElementById("input-trailer");
  let imageSelector = document.getElementById("input-link-img");

  // let idValue = Number(idSelector.value);
  let titleValue = titleSelector.value;
  let categoryValue = categorySelector.value;
  let yearValue = yearSelector.value;
  let castValue = castSelector.value;
  let descValue = descSelector.value;
  let trailerValue = trailerSelector.value;
  let imageValue = imageSelector.value;

  if (
    !titleValue ||
    !categoryValue ||
    !yearValue ||
    !castValue ||
    !descValue ||
    !trailerValue ||
    !imageValue
  ) {
    // alert("Mohon mengisi data yang kosong");
    document.getElementById("alert").style.display = "block";
  } else {
    let tempObj = {
      id: datas[datas.length - 1].id + 1,
      name: titleValue,
      category: categoryValue,
      year: yearValue,
      actors: castValue,
      description: descValue,
      link: trailerValue,
      img: imageValue,
    };

    if (newDatas === null) {
      datas.push(tempObj);
      listMovies(datas);
    } else {
      newDatas.push(tempObj);
      listMovies(newDatas);
    }
  }

  // console.log(
  //   // id,
  //   titleValue,
  //   categoryValue,
  //   yearValue,
  //   castValue,
  //   descValue,
  //   trailerValue,
  //   imageValue
  // );
  // console.log(datas);
}

// Read
function listMovies(movies) {
  // let container = document.getElementsByClassName("container")[0];
  let container = document.getElementById("container");
  let keyword = document.getElementById("keyword");
  // keyword.innerHTML = "";
  container.innerHTML = "";

  for (let perMovies of movies) {
    let { id, name, category, year, img, link, actors, description } =
      perMovies;

    // let verString = "";
    // for (let char of actors) {
    //   verString += `${char} `;
    // }

    container.innerHTML += `<div class="container-card">
    <div class="card">
      <div class="card-img">
        <img src="${img}" alt="${name}" />
      </div>
      <div class="card-body">
        <h3 id="title" class="card-body-title">${name}</h3>
        <div class="card-group">
          <span id="year" class="card-body-year">${year}</span><span id="category" class="card-body-category">${category}</span>
        </div>
        <p id="description" class="card-body-desc">
          ${description}
        </p>
        <p id="actors" class="card-body-actor">Pemeran: ${actors}</p>
      </div>
    </div>
    <div class="buttons">
      <a
        class="btn-watch"
        id="btn-watch-trailer"
        target="_blank"
        href='${link}'"
      >
        <i class="bx bx-play-circle"></i>Watch Trailer
      </a>
      <button onclick="editMovie(${id}), showUpdate()" href="#main-container" class="btn-edit">
        <i class="bx bx-edit-alt"></i>Edit
      </button>
      <button onclick="deleted(${id})" href="#main-container" class="btn-delete">
        <i class="bx bx-trash"></i>Delete
      </button>
    </div>
  </div>`;
  }
}

// Search
function findMovies() {
  let result = [];

  let keywordSelector = document.getElementById("keyword").value;

  //coba pake for of

  if (newDatas === null) {
    result = datas.filter((el) =>
      el.name.toLowerCase().includes(keywordSelector.toLowerCase())
    );
  } else {
    result = newDatas.filter((el) =>
      el.name.toLowerCase().includes(keywordSelector.toLowerCase())
    );
  }

  listMovies(result);
}

function alertModal() {
  
}
//Reset
function reset() {
  if (newDatas === null) {
    listMovies(datas);
    let keywordInputSelector = document.getElementById("keyword");
    keywordInputSelector.value = "";
  } else {
    listMovies(newDatas);
    let keywordInputSelector = document.getElementById("keyword");
    keywordInputSelector.value = "";
  }
}

//Delete
function deleted(id) {
  console.log(id);
  if (newDatas === null) {
    newDatas = [];
    for (let perData of datas) {
      if (id !== perData.id) {
        newDatas.push(perData);
      }
    }
    listMovies(newDatas);
  } else {
    let temp = [];
    for (let data of newDatas) {
      if (id !== data.id) {
        temp.push(data);
      }
    }

    newDatas = [...temp];
    listMovies(temp);
  }
}


// Change to Add Movie
function hideDashboard() {
  document.getElementById("add-movie-page").style.display = "block";
  document.getElementById("main-container").style.display = "none";
  document.getElementById("section-about-us").style.display = "none";


  document.getElementById("title-header").innerHTML = "Add Movie";
  document.getElementById("create-data").style.display = "block";
  document.getElementById("update-data").style.display = "none";

  let titleSelector = document.getElementById("input-title");
  let categorySelector = document.getElementById("input-category");
  let yearSelector = document.getElementById("input-year");
  let castSelector = document.getElementById("input-cast");
  let descSelector = document.getElementById("input-desc");
  let trailerSelector = document.getElementById("input-trailer");
  let imageSelector = document.getElementById("input-link-img");

  // let idValue = Number(idSelector.value);
  titleSelector.value = "";
  categorySelector.value = "";
  yearSelector.value = "";
  castSelector.value = "";
  descSelector.value = "";
  trailerSelector.value = "";
  imageSelector.value = "";
}

// Change to Dashboard
function hideAddMovie() {
  document.getElementById("main-container").style.display = "block";
  document.getElementById("add-movie-page").style.display = "none";
  document.getElementById("section-about-us").style.display = "none";
}

// Change to About Us
function showAboutUs() {
  document.getElementById("section-about-us").style.display = "block";
  document.getElementById("add-movie-page").style.display = "none";
  document.getElementById("main-container").style.display = "none";
}

// Change to Update Movie
function showUpdate() {
  document.getElementById("add-movie-page").style.display = "block";
  document.getElementById("main-container").style.display = "none";

  document.getElementById("title-header").innerHTML = "Update Movie";
  document.getElementById("update-data").style.display = "block";
  document.getElementById("create-data").style.display = "none";
}


// Replace Name
function replaceName() {
  let name = prompt("Halo! Siapa nama kamu?", "");
  document.getElementById("name").innerHTML = name;
} 

// replaceName()