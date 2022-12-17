'use strict'

function renderSavedMemes() {
    const savedMemes=getSavedMemes()

    savedMemes.forEach((meme)=>{
        var memeCanvas = document.createElement('canvas');
        var memeCtx = memeCanvas.getContext('2d');
        const elContainer = document.querySelector('.my-memes')
        elContainer.innerHTML=''
        memeCanvas.addEventListener('click', ()=>{
            gMeme=meme
            onToggleMemeEditor()
        })

        const img = new Image();
        img.src = gImgs.find((item)=> item.id===meme.selectedImgId).url;

        memeCanvas.width = 200
        memeCanvas.height = img.height * memeCanvas.width / img.width

        img.onload = () => {
            memeCtx.drawImage(img, 0, 0, memeCanvas.width, memeCanvas.height) //img,x,y,xEnd,yEnd
            drawLines(meme,memeCanvas,memeCtx)
            elContainer.appendChild(memeCanvas)
        }
    })
}
