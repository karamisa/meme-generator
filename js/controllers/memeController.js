'use strict'
let gCanvas
let gCtx

function renderMeme() {
    const meme=getMeme()

    gCanvas = document.createElement('canvas');
    gCtx = gCanvas.getContext('2d');
    const elContainer = document.querySelector('.canvas-container')
    
    // load the image and draw it on the canvas
    const img = new Image();
    img.src = gImgs.find((item)=> item.id===meme.selectedImgId).url;

    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = img.height * gCanvas.width / img.width
    if (gCanvas.height > elContainer.offsetHeight) {
        gCanvas.height=elContainer.offsetHeight
        gCanvas.width = img.height * gCanvas.height / img.width
    }
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
        drawLine()
        elContainer.innerHTML=''
        elContainer.appendChild(gCanvas)
    }


}



function drawLine() {
    const meme=getMeme()
    const currLine=meme.lines[meme.selectedLineIdx]
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = "40px Impact";
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = currLine.align
    

    gCtx.fillText(currLine.txt, gCanvas.width/2, 40) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(currLine.txt, gCanvas.width/2, 40) // Draws (strokes) a given text at the given (x, y) position.
}

function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth - 20
    // Unless needed, better keep height fixed.
}