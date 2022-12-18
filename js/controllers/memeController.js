'use strict'
let gCanvas
let gCtx


//RENDER CANVAS/MEME:

function renderMeme() {
    const meme = getMeme()
    const img = gMemeImg

    gCanvas = document.getElementById('meme-canvas')
    gCtx = gCanvas.getContext('2d');
    resizeCanvastoImg(img)

    renderImg(img)
    drawLines(meme, gCanvas, gCtx)
    setEditorValues()
}

function resizeCanvastoImg(img) {
    var elContainer = document.querySelector('.canvas-container')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = img.height * gCanvas.width / img.width
    if (gCanvas.height > elContainer.offsetHeight) {
        gCanvas.height = elContainer.offsetHeight
        gCanvas.width = img.height * gCanvas.height / img.width
    }
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function drawLines(meme, canvas, ctx) {
    meme.lines.forEach((line,idx) => {
        const txt = (line.txt) ? line.txt : line.defaultTxt
        const txtFont= line.size * canvas.height
        const posX = line.pos.x * canvas.width
        const posY = line.pos.y * canvas.height

        ctx.lineWidth = 2
        ctx.strokeStyle = 'black'
        ctx.fillStyle = line.color
        ctx.font = `${txtFont}px ${line.font}`
        ctx.textBaseline = 'middle'
        ctx.textAlign = line.align
        ctx.fillText(txt, posX, posY) // Draws (fills) a given text at the given (x, y) position.
        ctx.strokeText(txt, posX, posY) // Draws (strokes) a given text at the given (x, y) position.
        if (idx===meme.selectedLineIdx) {
            const metrics = ctx.measureText(txt)
            // const txtWidth = metrics.width;
            const txtHeight=txtFont
            const rectX = 10;  // 10 is the padding value
            const rectY = posY - txtHeight/2 -10;
            ctx.strokeRect(rectX, rectY, canvas.width - 20, txtHeight + 20);
    }
})
}

function setEditorValues() {
    const meme = getMeme()
    const currLine = meme.lines[meme.selectedLineIdx]


    const elCurrLine = document.getElementById('curr-line')
    const elTotalLines = document.getElementById('total-lines')
    const elTextInput = document.getElementById('meme-text-input')
    const elColorInput = document.getElementById('meme-color-input')


    if (currLine) {
        elCurrLine.innerText = meme.selectedLineIdx + 1
        elTotalLines.innerText = meme.lines.length
        elColorInput.value = currLine.color
        elTextInput.value=''
        if (currLine.txt) elTextInput.value = currLine.txt
        else elTextInput.placeholder = currLine.defaultTxt
    } else {
        elCurrLine.innerText = '0'
        elTotalLines.innerText = meme.lines.length
        elTextInput.value = ''
        elTextInput.placeholder = 'Click + or type here to add a line'
        elColorInput.value = '#FFFFFF'
    }
}




//PROCESS MEME INPUTS
function onSetLineTxt(txt) {
    if (gMeme.lines.length === 0) onAddLineTxt()
    setLineTxt(txt)
    renderMeme()
}

function onSetLineColor(color) {
    setLinecolor(color)
    renderMeme()
}

function onSetLineFontIncrease() {
    setLineFontIncrease()
    renderMeme()
}

function onSetLineFontDecrease() {
    setLineFontDecrease()
    renderMeme()
}

function onSetLineFontStyle(font) {
    setLineFonyStyle(font)
    renderMeme()
}

function onSetLineAlign(direction) {
    setLineAlign(direction)
    renderMeme()
}

function onAddLineTxt() {
    addLineTxt()
    renderMeme()
}

function onRemoveLineTxt() {
    removeLineTxt()
    if (gMeme.lines.length === 0) gMeme.selectedLineIdx = 0
    renderMeme()
}

function onSelectNextLine() {
    selectNextLine()
    renderMeme()
}

function onAddSticker(sticker) {
    addSticker(sticker)
    renderMeme()
}




//CANVAS TOUCH EVENTS:
function getEvPos(ev) {
    // Gets the offset pos , the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        console.log('ev:', ev)
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

//Check if the click is inside the circle 
function isLineTouched(clickedPos) {
    const { pos } = gCircle
    // Calc the distance between two dots
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    //If its smaller then the radius of the circle we are inside
    return distance <= gCircle.size
}


//SAVE - DOWNLOAD - SHARE
function downloadMeme(elLink) {
    //Protect the image soo attacker could not download imgs from diff domain
    const data = gCanvas.toDataURL() // For security reason you cannot do toDataUrl on tainted canvas
    //This protects users from having private data exposed by using images
    // to pull information from remote web sites without permission.
    elLink.href = data
    elLink.download = 'my-meme.jpg'
    flashMsg('Meme Downloaded!')
}

function onSaveMeme() {
    saveMeme()
    flashMsg("Meme Saved!")
}


//not used for now
function addEditorEventListeners() {

    const elTextInput = document.getElementById('meme-text-input')
    const elColorInput = document.getElementById('meme-color-input')
    const elFontIncreaseBtn = document.getElementById('meme-font-increase')
    const elFontDecreaseBtn = document.getElementById('meme-font-decrease')
    const elToggleNextLineBtn = document.getElementById('select-line')
    const elFontSelect = document.getElementById('meme-font-select')

    elTextInput.addEventListener('input', function () {
        onSetLineTxt(this.value)
    })

    elColorInput.addEventListener('input', function () {
        onSetLineColor(elColorInput.value)
    })

    elFontIncreaseBtn.addEventListener('click', function () {
        onSetLineFontIncrease()
    })

    elFontDecreaseBtn.addEventListener('click', function () {
        onSetLineFontDecrease()
    })

    elToggleNextLineBtn.addEventListener('click', function () {
        onSelectNextLine()
    })

    elFontSelect.addEventListener('change', () => {
        onSetLineFontStyle(elFontSelect.value)
    })

    window.addEventListener('resize', () => {
        renderMeme()
    })
}




