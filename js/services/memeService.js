'use strict'

var gMeme

//CONST
const MEMES_STORAGE_KEY = 'userMEMEdb'
const MEME_LINES = [
    "When you realize it's Monday tomorrow",
    "When you see the boss coming and you're not working",
    "When you accidentally hit 'reply all'",
    "When you remember something funny and no one is around to hear it",
    "When you're trying to stay mad but the person is just too cute",
    "When you're trying to do something but the cat has other plans",
    "When you're trying to be healthy but then the pizza arrives",
    "When you're trying to be productive but Netflix has other ideas",
    "When you finally finish a task and feel like a boss",
    "When you have a great idea but then forget it",
    "When you see someone you don't want to talk to and have to pretend you're busy",
    "When you try to be cool but then you do something awkward",
    "When you try to take a nice photo but the camera has other ideas",
    "When you're trying to be adult but then you see something from your childhood",
    "When you think you have it all figured out but then life throws a curveball"
]



//RETRIVING MEMES
function getMeme() {
    return gMeme
}


function getSavedMemes() {
    const savedMemes = loadSavedMemes()
    return savedMemes
}



//SETTING MEME IMG
function setImg(img, meme = createMeme()) {
    //gMeme
    gMeme = meme
    gMeme.selectedImgId = img.id

}



//SETING MEME PROPERTIES
function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setLinecolor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setLineFontIncrease() {
    gMeme.lines[gMeme.selectedLineIdx].size += 0.02
}

function setLineFontDecrease() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 0.02
}

function selectNextLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
}

function setLineFonyStyle(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function setLineAlign(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction
}

function addLineTxt() {
    const newLine = {
        pos: { x: 0.5, y: 0.5 },
        txt: undefined,
        defaultTxt: "Text line",
        font: 'Impact',
        size: 0.1,
        align: 'center',
        color: '#FFFFFF'
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function removeLineTxt() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}

function addSticker(sticker) {
    const newLine = {
        pos: { x: 0.5, y: 0.5 },
        txt: sticker,
        font: 'Impact',
        size: .2,
        align: 'center',
        color: '#FFFFFF'
    }
    gMeme.lines.push(newLine)
}



//BASIC
function createMeme() {
    return {
        selectedImgId: undefined,
        selectedLineIdx: 0,
        lines: [{
            pos: { x: 0.5, y: 0.1 },
            txt: undefined,
            defaultTxt: 'Text line',
            font: 'Impact',
            size: 0.1,
            align: 'center',
            color: '#FFFFFF'
        },
        {
            pos: { x: 0.5, y: 0.90 },
            txt: undefined,
            defaultTxt: "Text line",
            font: 'Impact',
            size: 0.1,
            align: 'center',
            color: '#FFFFFF'
        }]
    }
}

function generateRandMeme() {
    // Generate random parameters for the Meme
    const imgId = gImgs[getRandomIntInclusive(0, gImgs.length)].id;
    const numLines = Math.random() < 0.5 ? 1 : 2;
    const textSize = .02 + (Math.random() * (.30 - .02))
    const textColor = getRandomColor();
    var lines = new Array(numLines)
    for (let i = 0; i < numLines; i++) {
        let line = {
            pos: (i === 0) ? { x: 0.5, y: 0.1 } : { x: 0.5, y: 0.90 },
            txt: MEME_LINES[getRandomIntInclusive(0, MEME_LINES.length - 1)],
            font: 'Impact',
            size: textSize,
            align: 'center',
            color: textColor
        }
        lines[i] = line
    }

    // Create the Meme using the generated parameters
    const randMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: lines
    }
    return randMeme
}



//STORAGE
function saveMeme() {
    const savedMemes = loadSavedMemes()
    savedMemes.push(gMeme)
    saveToStorage(MEMES_STORAGE_KEY, savedMemes)
}

function loadSavedMemes() {
    const savedMemes = (loadFromStorage(MEMES_STORAGE_KEY)) ? loadFromStorage(MEMES_STORAGE_KEY) : []
    return savedMemes
}

