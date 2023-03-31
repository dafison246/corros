const show = document.querySelector('.show-img')

let counter = 88
let imgSrc = ""
let template;
for(let i = 0; i < counter; i++){
    imgSrc += `
        <li>gallery-cbl/Slide${i}-320x320.jpg</li> 
    `
    template = document.createElement('ul')
    template.innerHTML = imgSrc
    template.classList.add('gallery-photo')
}

Array.from(template.children).forEach(list=>{
    let img = document.createElement('img')
    img.setAttribute('src', list.textContent)
    show.append(img)
})
