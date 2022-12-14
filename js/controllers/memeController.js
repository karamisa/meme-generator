'use strict'
let gCanvas
let gCtx

function renderMeme() {
    gCanvas = document.createElement('canvas');
    gCtx = gCanvas.getContext('2d');
    const elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth


    // load the image and draw it on the canvas
    const img = new Image();
    img.src = 'img/meme-imgs (square)/1.jpg';
    gCanvas.height = img.height * gCanvas.width / img.width
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
        drawText()
    }
    elContainer.appendChild(gCanvas)
}


function drawText(text='Insert Text Here', x= (gCanvas.width / 2), y= 40) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = "40px Impact";
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function onSetLineTxt() {
    
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gCanvas.width = elContainer.offsetWidth - 20
    // Unless needed, better keep height fixed.
}