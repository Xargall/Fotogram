const randomImages = [
  "beach_flashlight.jpg",
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
    contentRef.innerHTML += `<button onclick="openDialog(${index})" class="tab" aria-label="open_Modal" aria-modal="true"><img src="./assets/img/${randomImages[index]}" alt="${randomImages[index]}" ></button>`;
  }
  contentRef.classList.add("single_image");
}

function openDialog(index) {
  const dialogRef = document.getElementById("dialog");
  dialogRef.innerHTML = "";
  dialogRef.showModal();
  dialogRef.classList.add("opened");
  dialogRef.innerHTML += getDialogHtml(index);
}

function closeDialog() {
  const dialogRef = document.getElementById("dialog");
  dialogRef.close();
  dialogRef.classList.remove("opened");
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
  <section onclick="bubbleProtection(event)" class="dialog_section">
      <header class="dialog_head" id="dial_head" >
      <p>${randomImages[index]}</p>
      <input type="button" onclick="closeDialog()"></input></header>
      <section>
        <article id="article_container" class="img_cont"><img src="./assets/img/${randomImages[index]}" alt="${randomImages[index]}" class="image"></article>
      </section>
      <footer class="icons">
        <button id="left_arrow" class="left" onclick="previousImg(${index})">
          <img src="./assets/icons/Union.png" alt="" />
        </button>
        <p class="count"> ${index + 1} / 12</p>
        <button id="right_arrow" class="right" onclick="nextImg(${index})">
          <img src="./assets/icons/Union.png" alt="" />
        </button>
      </footer>
  </section>`;
}

function bubbleProtection(event) {
  event.stopPropagation();
}
