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
        drawLines(gMeme,gCanvas,gCtx)
        elContainer.innerHTML=''
        elContainer.appendChild(gCanvas)
        setEditorValues()
    }

}

function drawLines(meme,canvas,ctx) {
    meme.lines.forEach((line,idx)=>{
        if (line.pos.x==undefined) line.pos.x=canvas.width/2
        if (line.pos.y==undefined) {  
            if (idx===0) line.pos.y=40
            else if (idx===1) (line.pos.y=canvas.height-40)
            else line.pos.y=canvas.height/2
        }
    })

    meme.lines.forEach((line)=>{
    ctx.lineWidth = 2
    ctx.strokeStyle = 'black'
    ctx.fillStyle = line.color
    ctx.font = `${line.size}px ${line.font}`
    ctx.textBaseline = 'middle'
    ctx.textAlign = line.align
    

    ctx.fillText(line.txt, line.pos.x, line.pos.y) // Draws (fills) a given text at the given (x, y) position.
    ctx.strokeText(line.txt, line.pos.x, line.pos.y) // Draws (strokes) a given text at the given (x, y) position.
    })
}

function onSetLineTxt(txt) {
    if (gMeme.lines.length===0) onAddLineTxt()
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

function onSetLineAlign(direction){
    setLineAlign(direction)
    renderMeme()
}

function onAddLineTxt() {
    addLineTxt()
    renderMeme()
}

function onRemoveLineTxt(){
    removeLineTxt()
    if (gMeme.lines.length===0) gMeme.selectedLineIdx=0
    renderMeme()
}

function onSelectNextLine(){
    selectNextLine()
    renderMeme()
}

function onAddSticker(sticker){
    addSticker(sticker)
    renderMeme()
}

function onSaveMeme(){
    saveMeme()
}


function setEditorValues(){
    const meme=getMeme()
    const currLine=meme.lines[meme.selectedLineIdx]


    const elCurrLine=document.getElementById('curr-line')
    const elTotalLines=document.getElementById('total-lines')
    const elTextInput=document.getElementById('meme-text-input')
    const elColorInput=document.getElementById('meme-color-input')
   
    
    if(currLine){
    elCurrLine.innerText=meme.selectedLineIdx+1
    elTotalLines.innerText=meme.lines.length
    if (currLine.txt.includes('Text line'))  {
        elTextInput.value=''
        elTextInput.placeholder=currLine.txt
    } else     elTextInput.value=currLine.txt
    elColorInput.value=currLine.color
    } else {
        elCurrLine.innerText='0'
        elTotalLines.innerText=meme.lines.length
        elTextInput.value=''
        elTextInput.placeholder='Click + or type here to add a line'
        elColorInput.value='#FFFFFF'
    }
}

function addEditorEventListeners(){

    const elTextInput=document.getElementById('meme-text-input')
    const elColorInput=document.getElementById('meme-color-input')
    const elFontIncreaseBtn=document.getElementById('meme-font-increase')
    const elFontDecreaseBtn=document.getElementById('meme-font-decrease')
    const elToggleNextLineBtn=document.getElementById('select-line')
    const elFontSelect=document.getElementById('meme-font-select')

    elTextInput.addEventListener('input', function(){
        onSetLineTxt(this.value)
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

