const cards = document.querySelectorAll('.memory-card');

let hasFlipped = false;
let firstcard ,secondCard;

let lockboard = false;
function flipcard(){
    if(lockboard) return;
    if(this === firstcard) return;
    this.classList.toggle('flip');
    if(!hasFlipped){
        hasFlipped = true;
        firstcard = this;
        
        return;
    }    
        hasFlipped = false;
        secondCard = this;
        checkForMatch();
    
    function checkForMatch(){
        let ismatch = firstcard.dataset.framework === secondCard.dataset.framework
           ismatch?disableCards(): setTimeout(() => {
               unflipCards();
           }, 1500);
   
    }
}
function unflipCards(){ 
    lockboard = true;
    firstcard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
                
}
function disableCards(){
    firstcard.removeEventListener('click',flipcard);
    secondCard.removeEventListener('click',flipcard);
    resetBoard()
}
function resetBoard(){
    [hasFlipped,lockboard] = [false, false];
    [firstcard,secondCard] = [null,null]
}
(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
})();
cards.forEach(card => card.addEventListener('click', flipcard));