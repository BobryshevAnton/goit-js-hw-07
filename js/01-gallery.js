import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const newGallery = document.querySelector( ".gallery" )
galleryItems.map( ( { preview, original, description } ) => {

   `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`

    console.log(preview)
} );

console.log(newGallery)

{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}
// 3.  вставляю модалку лайт бокс






console.log(galleryItems);
