'use strict'

var gMeme = {
    selectedImgId:undefined,
    selectedLineIdx:0,
    lines:[]
}


function getMeme(){
    return gMeme
}

function setImg(img){
    gMeme.selectedImgId=img.id,
    gMeme.selectedLineIdx=0,
    gMeme.lines=[{
        txt: 'insert text',
        size: 20,
        align: 'center',
        color: 'white'
    }]
    renderMeme()
}

function setLineTxt(txt){
    const newLine={
        txt: txt,
        size: 20,
        align: 'center',
        color: 'white'
    }
    gMeme.lines[gMeme.selectedLineIdx]=newLine
}

