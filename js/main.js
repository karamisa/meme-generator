'use strict'

function onInit(){
    onToggleGallery()
}

function onToggleGallery(){
    document.querySelector('section.img-gallery').style.display=''
    document.querySelector('.main-nav .nav-gallery').classList.add('active')

    document.querySelectorAll('section:not(section.img-gallery)').forEach((sect)=>sect.style.display='none')
    document.querySelectorAll('.main-nav li a:not(.nav-gallery)').forEach((sec)=>{
        if (sec.classList.contains('active'))  sec.classList.remove('active')})
    renderGallery()
}


function onToggleSavedMemes(){
    document.querySelector('section.my-memes').style.display=''
    document.querySelector('.main-nav .nav-memes').classList.add('active')



    document.querySelectorAll('section:not(section.my-memes)').forEach((sect)=>sect.style.display='none')
    document.querySelectorAll('.main-nav li a:not(.nav-memes)').forEach((sec)=>{
        if (sec.classList.contains('active'))  sec.classList.remove('active')})
    renderSavedMemes()
}





function onToggleMemeEditor(){
    document.querySelector('section.meme-editor').style.display=''

    document.querySelectorAll('section:not(section.meme-editor)').forEach((sect)=>sect.style.display='none')
    document.querySelectorAll('.main-nav li a').forEach((sec)=>{
        if (sec.classList.contains('active'))  sec.classList.remove('active')})
    renderMeme()
    function addMouseListeners() {
        gElCanvas.addEventListener('mousemove', onMove)
        gElCanvas.addEventListener('mousedown', onDown)
        gElCanvas.addEventListener('mouseup', onUp)
    }
    
    function addTouchListeners() {
        gElCanvas.addEventListener('touchmove', onMove)
        gElCanvas.addEventListener('touchstart', onDown)
        gElCanvas.addEventListener('touchend', onUp)
    }
}

function toggleMenu(){
    document.body.classList.toggle('menu-open')
}