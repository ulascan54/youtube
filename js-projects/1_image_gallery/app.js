const buttons = document.querySelectorAll('button')
const cards = document.querySelectorAll('.card')

 function filterItems(e) {
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')


    cards.forEach( async card =>{
        card.classList.add('fade-out')
        card.classList.remove('fade-in')
         setTimeout( function() {
            card.classList.add('hide');
            }, 300);
         await delay(300)
        
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name==='all'){
            card.classList.remove('fade-out')
            card.classList.add('fade-in')
            setTimeout( function() {
                card.classList.remove('hide');
                }, 300);
         await delay(300)

        }
    })
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  


buttons.forEach(btn=> btn.addEventListener('click',filterItems))