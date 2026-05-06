let randomImages = [
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

function init() {
  const contentRef = document.getElementById("content");
  for (let index = 0; index < randomImages.length; index++) {
    contentRef.innerHTML +=
      '<img src=\"' + randomImages[index] + '\" onclick="openDialog()" >';
  }
  contentRef.classList.add("single_image");
}

function openDialog() {
  const dialogRef = document.getElementById("dialog");
  dialogRef.showModal();
  dialogRef.classList.add("opened");
  dialogRef.classList.toggle("d_none");
}

function closeDialog() {
  const dialogRef = document.getElementById("dialog");
  dialogRef.close();
  dialogRef.classList.remove("opened");
  dialogRef.classList.toggle("d_none");
}

const articleContainer = document.getElementById("article_container");

articleContainer.innerHTML = `<img src="${randomImages[0]}/>`;

let imgIndex = 0;

function previousImg() {
  if (imgIndex > 0 && imgIndex < randomImages.length) {
    imgIndex--;
  } else {
    imgIndex = randomImages.length - 1;
  }
  articleContainer.innerHTML = `<img src="${randomImages[imgIndex]}" class="image" />`;
}

function nextImg() {
  if (imgIndex >= 0 && imgIndex < randomImages.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }
  articleContainer.innerHTML = `<img src="${randomImages[imgIndex]}" class="image" />`;
}
