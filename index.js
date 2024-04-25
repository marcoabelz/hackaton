let newDatas = null;

//harus terpanggil 1x ketika web di refresh
listMovies(datas);

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

    let verString = "";
    for (let char of actors) {
      verString += `${char} `;
    }

    container.innerHTML += `<div class="container-card">
    <div class="card">
      <div class="card-img">
        <img src="${img}" alt="${name}" />
      </div>
      <div class="card-body">
        <h3 id="title" class="card-body-title">${name}</h3>
        <div class="card-group">
          <span id="year" class="card-body-year">${year}</span><span> | </span
          ><span id="category" class="card-body-category">${category}</span>
        </div>
        <p id="description" class="card-body-desc">
          ${description}
        </p>
        <p id="actors" class="card-body-actor">${verString}</p>
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
      <button href="" class="btn-edit">
        <i class="bx bx-edit-alt"></i>Edit
      </button>
      <button onclick="deleted(${id})" href="" class="btn-delete">
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

  result = datas.filter((el) =>
    el.name.toLowerCase().includes(keywordSelector.toLowerCase())
  );

  listMovies(result);
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
