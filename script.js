console.log('script file loaded')


const btnAddItem = document.querySelector('#btnAddItem')
console.log(btnAddItem)

btnAddItem.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    const newli = document.createElement('li')
    // newli.innerText = 'dfdfsfds'
    newli.setAttribute('class', 'item_left')
    newli.appendChild(document.createTextNode('item_leftttttttttttttttttttttttttt'))
    document.querySelector('#un_list').appendChild(newli)
})

btnAddItemRight.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    const newli = document.createElement('li')
    // newli.innerText = 'dfdfsfds'
    newli.setAttribute('class', 'item_right')
    newli.appendChild(document.createTextNode('item_rightrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'))
    document.querySelector('#un_list').appendChild(newli)
})



const un_list = document.querySelector('#un_list')
console.log(un_list)