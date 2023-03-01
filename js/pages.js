import { galleryItems } from "./pagesItems.js";
const modalRef = document.querySelector(".modal");
const modalContainerRef = document.querySelector(".modal__container");
const titleContainerRef = document.querySelector(".title__description");
const galleryRef = document.querySelector(".gallery");

// Change code below this line

galleryRef.innerHTML = createGalleryMarkUp();

function createGalleryMarkUp() {
  let params = new URL(document.location).searchParams;
  let cat = parseInt(params.get("cat")); // is the number 18
  titleContainerRef.innerHTML = galleryItems[cat].description;
  console.log(cat);
  console.log(galleryItems);
  return galleryItems[cat].data
    .map((elem) => {
      return `
        <a class="tab" href="${elem.original}">
          <img
            class="tab__image"
            src="${elem.preview}"
            alt="${elem.alt}"
          />
      </a>
      `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  caption: "true",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function (e) {
  // Do something…
  console.log(e);
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // Some usefull information
});
