'use strict'
var gImgsJSON = [
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
  },
  {
    "id": 19,
    "url": "img/meme-imgs (various aspect ratios)/44.jpg",
    "keywords": []
  },
  {
    "id": 20,
    "url": "img/meme-imgs (various aspect ratios)/20.jpg",
    "keywords": []
  },
  {
    "id": 21,
    "url": "img/meme-imgs (various aspect ratios)/21.jpg",
    "keywords": []
  },
  {
    "id": 22,
    "url": "img/meme-imgs (various aspect ratios)/22.jpg",
    "keywords": []
  },
  {
    "id": 23,
    "url": "img/meme-imgs (various aspect ratios)/23.jpg",
    "keywords": []
  },
  {
    "id": 24,
    "url": "img/meme-imgs (various aspect ratios)/24.jpg",
    "keywords": []
  },
  {
    "id": 25,
    "url": "img/meme-imgs (various aspect ratios)/25.jpg",
    "keywords": []
  },
  {
    "id": 26,
    "url": "img/meme-imgs (various aspect ratios)/26.jpg",
    "keywords": []
  },
  {
    "id": 27,
    "url": "img/meme-imgs (various aspect ratios)/27.jpg",
    "keywords": []
  },
  {
    "id": 28,
    "url": "img/meme-imgs (various aspect ratios)/28.jpg",
    "keywords": []
  },
  {
    "id": 29,
    "url": "img/meme-imgs (various aspect ratios)/29.jpg",
    "keywords": []
  },
  {
    "id": 30,
    "url": "img/meme-imgs (various aspect ratios)/30.jpg",
    "keywords": []
  },
  {
    "id": 31,
    "url": "img/meme-imgs (various aspect ratios)/31.jpg",
    "keywords": []
  },
  {
    "id": 32,
    "url": "img/meme-imgs (various aspect ratios)/32.jpg",
    "keywords": []
  },
  {
    "id": 33,
    "url": "img/meme-imgs (various aspect ratios)/33.jpg",
    "keywords": []
  },
  {
    "id": 34,
    "url": "img/meme-imgs (various aspect ratios)/34.jpg",
    "keywords": []
  },
  {
    "id": 35,
    "url": "img/meme-imgs (various aspect ratios)/35.jpg",
    "keywords": []
  },
  {
    "id": 36,
    "url": "img/meme-imgs (various aspect ratios)/36.jpg",
    "keywords": []
  },
  {
    "id": 37,
    "url": "img/meme-imgs (various aspect ratios)/37.jpg",
    "keywords": []
  },
  {
    "id": 38,
    "url": "img/meme-imgs (various aspect ratios)/38.jpg",
    "keywords": []
  },
  {
    "id": 39,
    "url": "img/meme-imgs (various aspect ratios)/39.jpg",
    "keywords": []
  },
  {
    "id": 40,
    "url": "img/meme-imgs (various aspect ratios)/40.jpg",
    "keywords": []
  },
  {
    "id": 41,
    "url": "img/meme-imgs (various aspect ratios)/41.jpg",
    "keywords": []
  },
  {
    "id": 42,
    "url": "img/meme-imgs (various aspect ratios)/42.jpg",
    "keywords": []
  },
  {
    "id": 43,
    "url": "img/meme-imgs (various aspect ratios)/43.jpg",
    "keywords": []
  }
]

var gImgs=JSON.parse(JSON.stringify(gImgsJSON))


function renderGallery() {
  const elGalleryContainer = document.createElement('div')
  elGalleryContainer.classList.add('gallery')

  gImgs.forEach((img)=>{
    const elImg = document.createElement('img')
    elImg.src = img.url
    elImg.addEventListener('click', ()=>{
      onImageSelect(img)
    })
    elGalleryContainer.appendChild(elImg)
  })

  const elImgGallery = document.querySelector('.img-gallery')
  elImgGallery.appendChild(elGalleryContainer)
}


function onImageSelect(img) {
  document.querySelector('.img-gallery').style.display='none'
  document.querySelector('.meme-editor').style.display=''

  setImg(img)
}
