'use strict'
var gMemeImg

var gImgsStockJSON = [
  {
    "id": 1,
    "url": "img/meme-imgs (square)/1.jpg",
    "keywords": ["politics"]
  },
  {
    "id": 2,
    "url": "img/meme-imgs (square)/2.jpg",
    "keywords": ["dogs"]
  },
  {
    "id": 3,
    "url": "img/meme-imgs (square)/3.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 4,
    "url": "img/meme-imgs (square)/4.jpg",
    "keywords": ["cats"]
  },
  {
    "id": 5,
    "url": "img/meme-imgs (square)/5.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 6,
    "url": "img/meme-imgs (square)/6.jpg",
    "keywords": ["funny"]
  },
  {
    "id": 7,
    "url": "img/meme-imgs (square)/7.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 8,
    "url": "img/meme-imgs (square)/8.jpg",
    "keywords": ["classic"]
  },
  {
    "id": 9,
    "url": "img/meme-imgs (square)/9.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 10,
    "url": "img/meme-imgs (square)/10.jpg",
    "keywords": ["politics"]
  },
  {
    "id": 11,
    "url": "img/meme-imgs (square)/11.jpg",
    "keywords": ["sports"]
  },
  {
    "id": 12,
    "url": "img/meme-imgs (square)/12.jpg",
    "keywords": ["funny"]
  },
  {
    "id": 13,
    "url": "img/meme-imgs (square)/13.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 14,
    "url": "img/meme-imgs (square)/14.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 15,
    "url": "img/meme-imgs (square)/15.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 16,
    "url": "img/meme-imgs (square)/16.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 17,
    "url": "img/meme-imgs (square)/17.jpg",
    "keywords": ["politics"]
  },
  {
    "id": 18,
    "url": "img/meme-imgs (square)/18.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 19,
    "url": "img/meme-imgs (various aspect ratios)/44.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 20,
    "url": "img/meme-imgs (various aspect ratios)/20.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 21,
    "url": "img/meme-imgs (various aspect ratios)/21.jpg",
    "keywords": ["politics"]
  },
  {
    "id": 22,
    "url": "img/meme-imgs (various aspect ratios)/22.jpg",
    "keywords": ["dogs"]
  },
  {
    "id": 23,
    "url": "img/meme-imgs (various aspect ratios)/23.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 24,
    "url": "img/meme-imgs (various aspect ratios)/24.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 25,
    "url": "img/meme-imgs (various aspect ratios)/25.jpg",
    "keywords": ["cats"]
  },
  {
    "id": 26,
    "url": "img/meme-imgs (various aspect ratios)/26.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 27,
    "url": "img/meme-imgs (various aspect ratios)/27.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 28,
    "url": "img/meme-imgs (various aspect ratios)/28.jpg",
    "keywords": ["classic"]
  },
  {
    "id": 29,
    "url": "img/meme-imgs (various aspect ratios)/29.jpg",
    "keywords": ["funny"]
  },
  {
    "id": 30,
    "url": "img/meme-imgs (various aspect ratios)/30.jpg",
    "keywords": ["funny"]
  },
  {
    "id": 31,
    "url": "img/meme-imgs (various aspect ratios)/31.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 32,
    "url": "img/meme-imgs (various aspect ratios)/32.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 33,
    "url": "img/meme-imgs (various aspect ratios)/33.jpg",
    "keywords": ["politics"]
  },
  {
    "id": 34,
    "url": "img/meme-imgs (various aspect ratios)/34.jpg",
    "keywords": ["baby"]
  },
  {
    "id": 35,
    "url": "img/meme-imgs (various aspect ratios)/35.jpg",
    "keywords": ["dogs"]
  },
  {
    "id": 36,
    "url": "img/meme-imgs (various aspect ratios)/36.jpg",
    "keywords": ["politics"]
  },
  {
    "id": 37,
    "url": "img/meme-imgs (various aspect ratios)/37.jpg",
    "keywords": ["sports"]
  },
  {
    "id": 38,
    "url": "img/meme-imgs (various aspect ratios)/38.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 39,
    "url": "img/meme-imgs (various aspect ratios)/39.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 40,
    "url": "img/meme-imgs (various aspect ratios)/40.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 41,
    "url": "img/meme-imgs (various aspect ratios)/41.jpg",
    "keywords": ["funny"]
  },
  {
    "id": 42,
    "url": "img/meme-imgs (various aspect ratios)/42.jpg",
    "keywords": ["movies"]
  },
  {
    "id": 43,
    "url": "img/meme-imgs (various aspect ratios)/43.jpg",
    "keywords": ["politics"]
  }
]

var gImgs = JSON.parse(JSON.stringify(gImgsStockJSON))

function getImgById(imgId) {
  const img = gImgs.find((item) => item.id === imgId)
  return img
}

function renderGallery() {
  const elGalleryContainer = document.querySelector('.img-gallery .gallery')
  elGalleryContainer.innerHTML=''

  gImgs.forEach((img) => {
    const elImg = document.createElement('img')
    elImg.dataset.keywords = img.keywords
    elImg.src = img.url
    elImg.addEventListener('click', () => onImageSelect(img))
    elGalleryContainer.appendChild(elImg)
  })

  const elImgGallery = document.querySelector('.img-gallery')
  elImgGallery.appendChild(elGalleryContainer)
}

function onImageSelect(img) {
  document.querySelector('.img-gallery').style.display = 'none'
  document.querySelector('.meme-editor').style.display = ''

  setImg(img)
  gMemeImg=new Image()
  gMemeImg.src=img.url
  window.addEventListener('resize', () => {
    renderMeme()
})
  renderMeme()
}

function onGenerateRandMeme() {
  document.querySelector('.img-gallery').style.display = 'none'
  document.querySelector('.meme-editor').style.display = ''

  generateRandMeme()

}

function filterImgs() {
  var searchStr = document.getElementById('search').value;
  const images = document.querySelectorAll('.img-gallery img')
  if (searchStr === '') images.forEach(img => img.style.display = "");
  else {
    const filteredImages = Array.from(images).filter(function (img) {
      return img.dataset.keywords.substring(0, searchStr.length) === searchStr;
    })
    images.forEach(img => img.style.display = "none");
    filteredImages.forEach(img => img.style.display = "")
  }
}


