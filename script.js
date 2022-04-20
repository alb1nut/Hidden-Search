const searchButton = document.querySelector('.search-button')
const input = document.getElementById('input')
const body = document.getElementById('body')

// body.style.backgroundColor = '#7158e2'
searchButton.style.backgroundColor = '#fff'
searchButton.addEventListener('click' , ()=> {
    // console.log('Clicked Me');
    input.style.display = 'initial'
    // if (input.style.display = 'none') {
    //   let initial =  input.style.display = 'initial'
    // }else {
    //     input.style.display = 'none'
    // }

    input.focus()
})

// body.addEventListener('click' ,() => {
//     input.style.display = 'none'
// })

//////////////////////////////////////Travesy Code /////////////////////////////////////////

const search =document.querySelector('.search')
const btn =document.querySelector('.btn')
const inputs =document.querySelector('.input')

btn.addEventListener('click' , () => {
    search.classList.toggle('active') 
    inputs.focus()
})
