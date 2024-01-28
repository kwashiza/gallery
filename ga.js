let thnmbcontainer = document.getElementById('thumb-container')
let galeimagescontainer = document.getElementById('galeimages-container')
const displayElem = document.getElementById
let currentImageIndex = 0
let form = document.getElementById|('search-form')
let searchBar = document.getElementById('search-bar')

function showImage(index) {
    const imageUrl = galeimagescontainer[index].urls.regular;
    const altText = galeimagescontainer[index].alt_description;
 
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="${altText}">`;
}

const createthumbnail = (galeimages) => {
    galeimagedsContainer.innerHTML = '';
  
    galeimages.forEach((galeimages, index) => {
      let imgElement = document.createElement('img');
      imgElement.src = galeimages.urls.thumb;
      imgElement.alt = galeimages.alt_description;
  
      imgElement.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
      });
  
      galeimagesContainer.appendChild(imgElement);
    });
  };

  