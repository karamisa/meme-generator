'use strict'

function onInit() {
    onToggleGallery()
    gCanvas = document.getElementById('meme-canvas')

    addMouseListeners()
    addTouchListeners()
}


function onToggleGallery() {
    document.querySelector('section.img-gallery').style.display = ''
    document.querySelector('.main-nav .nav-gallery').classList.add('active')

    document.querySelectorAll('section:not(section.img-gallery)').forEach((sect) => sect.style.display = 'none')
    document.querySelectorAll('.main-nav li a:not(.nav-gallery)').forEach((sec) => {
        if (sec.classList.contains('active')) sec.classList.remove('active')
    })

    if (document.body.classList.contains('menu-open'))  document.body.classList.toggle('menu-open')


    renderGallery()
}


function onToggleSavedMemes() {
    document.querySelector('section.my-memes').style.display = ''
    document.querySelector('.main-nav .nav-memes').classList.add('active')



    document.querySelectorAll('section:not(section.my-memes)').forEach((sect) => sect.style.display = 'none')
    document.querySelectorAll('.main-nav li a:not(.nav-memes)').forEach((sec) => {
        if (sec.classList.contains('active')) sec.classList.remove('active')
    })
    renderSavedMemes()
    if (document.body.classList.contains('menu-open'))  document.body.classList.toggle('menu-open')
}


function onToggleMemeEditor() {
    document.querySelector('section.meme-editor').style.display = ''

    document.querySelectorAll('section:not(section.meme-editor)').forEach((sect) => sect.style.display = 'none')
    document.querySelectorAll('.main-nav li a').forEach((sec) => {
        if (sec.classList.contains('active')) sec.classList.remove('active')
    })


}

function toggleMenu() {
    document.body.classList.toggle('menu-open')
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function flashMsg(msg) {
    const el = document.querySelector('.user-msg')
    el.innerText = msg
    el.classList.add('open')
    setTimeout(() => {
        el.classList.remove('open')
    }, 3000)
}
