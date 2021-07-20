const form = document.querySelector('form')
const memeSection = document.querySelector('#memes')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let imageInput = form.elements.imageLink.value
    let topInput = form.elements.topText.value
    let bottomInput = form.elements.bottomText.value
    addMeme(imageInput, topInput, bottomInput)
    imageInput = ''
    topInput = ''
    bottomInput = ''
})

const addMeme = (image, top, bottom) => {

    let newMeme = document.createElement('div')
    newMeme.classList.add('meme')

    let newImage = document.createElement('img')
    let topText = document.createElement('p')
    let bottomText = document.createElement('p')
    topText.classList.add('topText')
    bottomText.classList.add('bottomText')

    newImage.src = image
    topText.innerText = top
    bottomText.innerText = bottom

    newMeme.appendChild(newImage)
    newMeme.appendChild(topText)
    newMeme.appendChild(bottomText)
    memeSection.appendChild(newMeme)

}