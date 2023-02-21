import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryParent = document.querySelector('.gallery');

// * add images
const images = galleryItems.map(item => `
    <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");
galleryParent.innerHTML = images;

// * add modal open
const loadImageFullSize = (event) => {
    event.preventDefault();
    // * fucntion to close by escape
    const closePhotoByKeyPress = (event) => {
        if (event.code !== 'Escape') {
         return;   
        }
        return largePhoto.close();
    }    
    const selectedImage = event.target.dataset.source;
    // * initializating modal
    const largePhoto = basicLightbox.create(
        `<img src="${selectedImage}" width="1280">`, {
            onShow: () => {
                window.addEventListener('keydown', closePhotoByKeyPress)
            }, 
            onClose: () => {
                window.removeEventListener('keydown', closePhotoByKeyPress)
            }
        });
    largePhoto.show();
}


galleryParent.addEventListener("click", loadImageFullSize);