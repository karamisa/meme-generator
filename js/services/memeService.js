'use strict'

var gMeme
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
];


function getMeme() {
    return gMeme
}

function setImg(img) {
    gMeme = createMeme()
    gMeme.selectedImgId = img.id,
        gMeme.selectedLineIdx = 0,

        renderMeme()
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


function setLinecolor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setLineFontIncrease() {
    gMeme.lines[gMeme.selectedLineIdx].size += 2
}

function setLineFontDecrease() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 2
}

function selectNextLine() {
    (gMeme.selectedLineIdx === gMeme.lines.length - 1) ? gMeme.selectedLineIdx = 0 : gMeme.selectedLineIdx++
}

function setLineFonyStyle(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function createMeme() {
    return {
        selectedImgId: undefined,
        selectedLineIdx: 0,
        lines: [{
            pos: { x: 0, y: 0 },
            txt: 'Line1',
            font: 'Impact',
            size: 20,
            align: 'center',
            color: '#FFFFFF'
        },
        {
            pos: { x: 0, y: 0 },
            txt: 'Line 2',
            font: 'Impact',
            size: 20,
            align: 'center',
            color: '#FFFFFF'
        }]
    }
}

function generateRandMeme() {
    // Generate random parameters for the Meme
    const imageId = gImgs[getRandomIntInclusive(0, gImgs.length)].id;
    const numLines = Math.random() < 0.5 ? 1 : 2;
    const textSize = getRandomIntInclusive(10, 40);
    const textColor = getRandomColor();
    var lines = new Array(numLines)
    for (let i = 0; i < numLines; i++) {
        let line = {
            pos: { x:0, y:0 },
            txt: MEME_LINES[getRandomIntInclusive(0, MEME_LINES.length-1)],
            font: 'Impact',
            size: textSize,
            align: 'center',
            color: textColor
        }
        lines[i]=line
    }

    // Create the Meme using the generated parameters
    gMeme = {
        selectedImgId: imageId,
        selectedLineIdx: 0,
        lines: lines

    }
    renderMeme()
}





