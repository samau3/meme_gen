const form = document.querySelector('form')
const memeList = document.querySelector('#memes')

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
    const newLi = document.createElement('li');
    newLi.innerText = (`${image}, ${top}, ${bottom}`)
    memeList.appendChild(newLi)
}