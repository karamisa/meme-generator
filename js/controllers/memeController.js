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
        drawLines()
        elContainer.innerHTML=''
        elContainer.appendChild(gCanvas)
    }
}


function drawLines() {
    const meme=getMeme()
    meme.lines[0].pos.x=gCanvas.width/2
    meme.lines[0].pos.y=40
    if (meme.lines[1]){
    meme.lines[1].pos.x=gCanvas.width/2
    meme.lines[1].pos.y=gCanvas.height-40
    }
    meme.lines.forEach((line,idx)=>{
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px ${line.font}`
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = line.align
    

    gCtx.fillText(line.txt, line.pos.x, line.pos.y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(line.txt, line.pos.x, line.pos.y) // Draws (strokes) a given text at the given (x, y) position.
    })
}

function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onSetLineColor(color){
    setLinecolor(color)
    renderMeme()
}

function onSetLineFontIncrease(){
    setLineFontIncrease()
    renderMeme()
}

function onSetLineFontDecrease(){
    setLineFontDecrease()
    renderMeme()
}

function onSetLineFontStyle(font){
    setLineFonyStyle(font)
    renderMeme()
}

function onSelectNextLine(){
    selectNextLine()


    const meme=getMeme()
    const currLine=meme.lines[meme.selectedLineIdx]
    const elTextInput=document.getElementById('meme-text-input')
    const elColorInput=document.getElementById('meme-color-input')
    const elCurrLineIndicator=document.getElementById('curr-line')


    elCurrLineIndicator.textContent=meme.selectedLineIdx+1
    elTextInput.value=currLine.txt
    elColorInput.value=currLine.color
    renderMeme()
}


function setEditor(){
    const meme=getMeme()
    const currLine=meme.lines[meme.selectedLineIdx]


    const elTextInput=document.getElementById('meme-text-input')
    const elColorInput=document.getElementById('meme-color-input')
    const elFontIncreaseBtn=document.getElementById('meme-font-increase')
    const elFontDecreaseBtn=document.getElementById('meme-font-decrease')
    const elToggleNextLineBtn=document.getElementById('select-line')
    const elFontSelect=document.getElementById('meme-font-select')

    elTextInput.placeholder=currLine.txt
    elColorInput.value=currLine.color

    elTextInput.addEventListener('input', function(){
        onSetLineTxt(elTextInput.value)
    })
    
    elColorInput.addEventListener('input', function(){
        onSetLineColor(elColorInput.value)
    })

    elFontIncreaseBtn.addEventListener('click', function(){
        onSetLineFontIncrease()
    })

    elFontDecreaseBtn.addEventListener('click', function(){
        onSetLineFontDecrease()
    })

    elToggleNextLineBtn.addEventListener('click', function (){
        onSelectNextLine()
    })

    elFontSelect.addEventListener('change',()=>{
        onSetLineFontStyle(elFontSelect.value)
    })

    window.addEventListener('resize', () => {
        renderMeme()
    })

}

