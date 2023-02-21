import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryParent = document.querySelector('.gallery');
// * add images
const imagesLightBox = galleryItems.map(item => `
<a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join("");

galleryParent.innerHTML = imagesLightBox;
// * add gallery 
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});