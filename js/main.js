'use strict'

function onInit(){
    onToggleGallery()
}

function onToggleGallery(){
    document.querySelector('section.img-gallery').style.display=''
    document.querySelector('.main-nav .nav-gallery').classList.add('active')


    document.querySelector('section.meme-editor').style.display='none'
    document.querySelector('section.about').style.display='none'





    renderGallery()
}


function toggleMenu(){
    document.body.classList.toggle('menu-open')
}