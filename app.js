const form = document.querySelector('form')
const memeSection = document.querySelector('#memes')
// const memes = document.querySelectorAll('.memes')

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

    let topDiv = document.createElement('div')
    let bottomDiv = document.createElement('div')

    topDiv.appendChild(topText)
    bottomDiv.appendChild(bottomText)

    topDiv.classList.add('topText')
    bottomDiv.classList.add('bottomText')


    newImage.src = image
    topText.innerText = top
    bottomText.innerText = bottom

    newMeme.appendChild(newImage)
    newMeme.appendChild(topDiv)
    newMeme.appendChild(bottomDiv)
    memeSection.appendChild(newMeme)

    newMeme.addEventListener("click", function (e) {
        newMeme.remove()
    })
}
