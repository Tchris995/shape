const done = document.querySelector('nav ul li:last-child')
const bad = document.querySelector('.cold')

const act = document.querySelector('nav .sidra')


function add(boss, ada) {
  boss.addEventListener('click', ()=>{
    ada.style.display = 'flex'
  })
  
}

function hide (boss, ada){
  boss.addEventListener('click', ()=>{
    ada.style.display = 'none'
 })

}
hide(bad, act)

add(done, act)

