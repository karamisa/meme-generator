'use strict'
var gImgs=[
  {
      "id": 1,
      "url": "img/meme-imgs (square)/1.jpg",
      "keywords": []
  },
  {
      "id": 2,
      "url": "img/meme-imgs (square)/2.jpg",
      "keywords": []
  },
  {
      "id": 3,
      "url": "img/meme-imgs (square)/3.jpg",
      "keywords": []
  },
  {
      "id": 4,
      "url": "img/meme-imgs (square)/4.jpg",
      "keywords": []
  },
  {
      "id": 5,
      "url": "img/meme-imgs (square)/5.jpg",
      "keywords": []
  },
  {
      "id": 6,
      "url": "img/meme-imgs (square)/6.jpg",
      "keywords": []
  },
  {
      "id": 7,
      "url": "img/meme-imgs (square)/7.jpg",
      "keywords": []
  },
  {
      "id": 8,
      "url": "img/meme-imgs (square)/8.jpg",
      "keywords": []
  },
  {
      "id": 9,
      "url": "img/meme-imgs (square)/9.jpg",
      "keywords": []
  },
  {
      "id": 10,
      "url": "img/meme-imgs (square)/10.jpg",
      "keywords": []
  },
  {
      "id": 11,
      "url": "img/meme-imgs (square)/11.jpg",
      "keywords": []
  },
  {
      "id": 12,
      "url": "img/meme-imgs (square)/12.jpg",
      "keywords": []
  },
  {
      "id": 13,
      "url": "img/meme-imgs (square)/13.jpg",
      "keywords": []
  },
  {
      "id": 14,
      "url": "img/meme-imgs (square)/14.jpg",
      "keywords": []
  },
  {
      "id": 15,
      "url": "img/meme-imgs (square)/15.jpg",
      "keywords": []
  },
  {
      "id": 16,
      "url": "img/meme-imgs (square)/16.jpg",
      "keywords": []
  },
  {
      "id": 17,
      "url": "img/meme-imgs (square)/17.jpg",
      "keywords": []
  },
  {
      "id": 18,
      "url": "img/meme-imgs (square)/18.jpg",
      "keywords": []
  }
]


function renderGallery() {
        const galleryElement = document.createElement('div')
        galleryElement.classList.add('gallery')
    
        const image1Element = document.createElement('img')
        image1Element.src = 'img/meme-imgs (square)/1.jpg'
        galleryElement.appendChild(image1Element)
    
        const image2Element = document.createElement('img')
        image2Element.src = 'img/meme-imgs (square)/2.jpg'
        galleryElement.appendChild(image2Element)
    
        const elGalleryContainer=document.querySelector('.img-gallery')
        elGalleryContainer.appendChild(galleryElement)
        console.log(galleryElement)
        console.log(elGalleryContainer)
      }

function setgImgs(){
  for (var i=0;i<18;i++){
    gImgs[i]={
      id: i+1,
      url: `img/meme-imgs (square)/${i+1}.jpg`,
      keywords: []
    }
  }
}

