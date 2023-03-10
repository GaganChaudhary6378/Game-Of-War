let deckId;
let computerScore=0;
let myScore=0;
let computerEl=document.getElementById("comp-score");
let myScoreEl=document.getElementById("human-score");
let imageEl1=document.getElementById("img-el1");
let imageEl2=document.getElementById("img-el2");
let warEl=document.getElementById("war");
let drawBtn=document.getElementById("draw-el");
let remainingEl=document.getElementById("cont-el");
function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        remainingEl.textContent=`Remaining Cards: ${data.remaining}`
        deckId=data.deck_id;
    })
}

document.getElementById("new-deck").addEventListener('click',handleClick)


function getCards(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        remainingEl.textContent=`Remaining Cards: ${data.remaining}`
        imageEl1.innerHTML=`
        <img src=${data.cards[0].image} />
        `
        imageEl2.innerHTML=`
        <img src=${data.cards[1].image} />
        `
        const winner=determineCardWinner(data.cards[0],data.cards[1]);
        warEl.textContent=winner;

        if(data.remaining==0){
            drawBtn.disabled=true;  
            if(computerScore>myScore){
                warEl.textContent="The computer won the game!"
            }else if(myScore>computerScore){
                warEl.textContent="You won the game!"
            }else{
                warEl.textContent="It's a tie game!"
            }
        }
    })

}

drawBtn.addEventListener('click',getCards)

function determineCardWinner(card1,card2){
    const valueOptions=["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"]
    const card1ValueIndex=valueOptions.indexOf(card1.value)
    const card2ValueIndex=valueOptions.indexOf(card2.value)

    if(card1ValueIndex>card2ValueIndex){
        computerScore++;
        computerEl.textContent=`Computer: ${computerScore}`
        return "Computer wins!"
    }else if(card2ValueIndex>card1ValueIndex){
        myScore++
        myScoreEl.textContent=`Me: ${myScore}`
        return "You win!"
    }else{
        return "War!"
    }
} 