'use strict'

function onInit(){
    onToggleGallery()
}

function onToggleGallery(){
    document.querySelector('section.img-gallery').style.display=''
    document.querySelector('.main-nav .nav-gallery').classList.add('active')


    document.querySelector('section.meme-editor').style.display='none'
    document.querySelector('section.my-memes').style.display='none'
    document.querySelector('section.about').style.display='none'


    const elTextInput=document.getElementById('meme-text-input')
    elTextInput.addEventListener('input', function(){
        onSetLineTxt(elTextInput.value)
        
    })
    renderGallery()
}

