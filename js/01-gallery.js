import { galleryItems } from './gallery-items.js';
// Change code below this line

const newGallery = document.querySelector( ".gallery" )

const galleryItem= galleryItems.map( ( { preview, original, description } ) => {

   return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`
} );

newGallery.insertAdjacentHTML( "afterbegin", galleryItem.join( "" ) )

newGallery.addEventListener("click", handlerClick  );

function handlerClick ( event ) {

  event.preventDefault();

  if ( event.target.nodeName !=="IMG" ) {
    return;
  }

  const instance = basicLightbox.create( `<img src="${ event.target.dataset.source }" width="800" height="600">`, {
    
  onShow: (instance) => {
    window.addEventListener('keydown', onEscClick);
  },

  onClose: (instance) => {
    window.removeEventListener('keydown', onEscClick);
  },
});
instance.show()
}

function onEscClick(evt) {
  if (evt.key === 'Escape') {
    instance.close();
    return;
  }
}