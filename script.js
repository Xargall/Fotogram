const randomImages = [
  "./assets/img/beach_flashlight.jpg",
  "./assets/img/blue_tit_bird.jpg",
  "./assets/img/city_by_night.jpg",
  "./assets/img/frosty_lake.jpg",
  "./assets/img/hurrican_from_space.jpg",
  "./assets/img/icy_lake.jpg",
  "./assets/img/mountain_view.jpg",
  "./assets/img/snowy_tree.jpg",
  "./assets/img/snow_leopard.jpg",
  "./assets/img/stormy_sky.png",
  "./assets/img/strange_bird.jpg",
  "./assets/img/swimming_duck.jpg",
];

const randomNames = [
  "beach_flashlight",
  "blue_tit_bird.jpg",
  "city_by_night.jpg",
  "frosty_lake.jpg",
  "hurrican_from_space.jpg",
  "icy_lake.jpg",
  "mountain_view.jpg",
  "snowy_tree.jpg",
  "snow_leopard.jpg",
  "stormy_sky.png",
  "strange_bird.jpg",
  "swimming_duck.jpg",
];

function init() {
  const contentRef = document.getElementById("content");
  for (let index = 0; index < randomImages.length; index++) {
    contentRef.innerHTML += `<img src="${randomImages[index]}" alt="" onclick="openDialog(${index})">`;
  }
  contentRef.classList.add("single_image");
}

function openDialog(index) {
  const dialogRef = document.getElementById("dialog");
  dialogRef.innerHTML = "";
  dialogRef.showModal();
  dialogRef.classList.add("opened");
  dialogRef.classList.toggle("d_none");
  dialogRef.innerHTML += getDialogHtml(index);
}

function closeDialog() {
  const dialogRef = document.getElementById("dialog");
  dialogRef.close();
  dialogRef.classList.remove("opened");
  dialogRef.classList.toggle("d_none");
}

function previousImg(index) {
  const prevRef = document.getElementById("dialog");

  if (index > 0 && index < randomImages.length) {
    index--;
  } else {
    index = randomImages.length - 1;
  }
  prevRef.innerHTML = getDialogHtml(index);
}

function nextImg(index) {
  const nextRef = document.getElementById("dialog");
  nextRef.innerHTML = "";
  if (index >= 0 && index < randomImages.length - 1) {
    index++;
  } else {
    index = 0;
  }
  nextRef.innerHTML = getDialogHtml(index);
}

function getDialogHtml(index) {
  return `
      <header class="dialog_head" id="dial_head" >
      <p>${randomNames[index]}</p>
      <input type="button" onclick="closeDialog()"></input></header>
      <section>
        <article id="article_container"><img src="${randomImages[index]}" class="image"></article>
      </section>
      <footer class="icons">
        <button id="left_arrow" class="left" onclick="previousImg(${index})">
          <img src="./assets/icons/Union.png" alt="" />
        </button>
        <p class="count"> ${index + 1} / 12</p>
        <button id="right_arrow" class="right" onclick="nextImg(${index})">
          <img src="./assets/icons/Union.png" alt="" />
        </button>
      </footer>`;
}


