'use strict'

function renderSavedMemes() {
    const savedMemes = getSavedMemes()

    savedMemes.forEach((meme) => {
        const memeImg = getImgById(meme.selectedImgId)
        var memeCanvas = document.createElement('canvas');
        var memeCtx = memeCanvas.getContext('2d');
        memeCanvas.width = 200

        memeCanvas.addEventListener('click', () => {
            setImg(memeImg, meme)
            onToggleMemeEditor()
        })

        const elContainer = document.querySelector('.my-memes')
        elContainer.innerHTML = ''

        const img = new Image();
        img.src = memeImg.url;


        memeCanvas.height = img.height * memeCanvas.width / img.width

        img.onload = () => {
            memeCtx.drawImage(img, 0, 0, memeCanvas.width, memeCanvas.height) //img,x,y,xEnd,yEnd
            drawLines(meme, memeCanvas, memeCtx)
            elContainer.appendChild(memeCanvas)
        }
    })
}


