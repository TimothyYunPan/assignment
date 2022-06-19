let newName = document.getElementById('titleName')


newName.addEventListener('click',function (){
    
    newName.textContent = 'Have a Good Time!'


})

let callToAction = document.getElementById('actionBtn')
let action = document.getElementsByClassName('main-2')[0]

callToAction.addEventListener('click',function (){
    console.log('@@')
    // console.log(action[0])
    console.log(callToAction)
    console.log(action)
    // console.log(action[0])
    action.style.display = "flex"
    console.log(1)
})

let callMenu = document.getElementsByClassName('menu-toggle')[0]
let showMenu = document.getElementsByClassName('nav-items')[0]
let closeMenu = document.getElementById('x')

callMenu.addEventListener('click',function(){
    console.log('@@')
    showMenu.style.display = "block"
})

closeMenu.addEventListener('click',function(){
    showMenu.style.display = "none"
    
})
