
 'use strict';
// // SELECTING ELEMENTS

/*
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

const score0El=document.getElementById('score--0');
const score1El=document.getElementById('score--1');

const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const diceEl=document.querySelector('.dice');

const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

// STARTING CONDITIONS
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

let scores=[0,0];
let currentScore=0;
let currentPlayer=0;
let playing=true;


const switchPlayer=function(){
    currentScore=0;
    document.getElementById(`current--${currentPlayer}`).textContent=currentScore;
    currentPlayer=currentPlayer===0 ? 1:0;
    
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

const playingGame=function(){
    if(playing){
        // 1.GENERATING a random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    
    // 2.display dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    
    // check for rolled 1 
    
    if(dice!==1){
        // add dice to current score
        currentScore=currentScore+dice;
       document.getElementById(`current--${currentPlayer}`).textContent=currentScore;
    
    
    }else{
        // switch to next player
       switchPlayer();    
    }
    }
}

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click',function(){
   playingGame();
});

btnHold.addEventListener('click',function(){
if(playing){
    // 1.add current score to active player's score
  scores[currentPlayer]+=currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent=scores[currentPlayer];
  
}
// 2.check if player's score is >=100
 if(scores[currentPlayer]>=10){
     playing=false;
     diceEl.classList.add('hidden');
    document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
     document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');  
   
    }else{
          // switch to the next player
     switchPlayer();
    }
   
});


btnNew.addEventListener('click',function(){
    
    

    score0El.textContent=0;
    score1El.textContent=0;
    
    scores[0]=0;
    scores[1]=0;
    
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    currentPlayer=0;
    // document.getElementById(`player--${currentPlayer}`).classList.remove('player--winner');
   currentScore=0;
   playingGame=true;
});




//  score0El=document.getElementById('score--0');
// const score1El=document.getElementById('score--1');

// const current0El=document.getElementById('current--0');
// const current1El














// const playerActive=document.querySelector('.player--active');

// const player0El=document.querySelector('.player--0');
// const player1El=document.querySelector('.player--1');

// const score0El=document.querySelector('#score--0');
// const score1El=document.querySelector('#score--1');

// const diceEl=document.querySelector('.dice');

// const current0El=document.querySelector('#current--0');
// const current1El=document.querySelector('#current--1');

// const btnRoll=document.querySelector('.btn--roll');
// score0El.textContent=0;
// score1El.textContent=0;

//  document.querySelector('.dice').classList.add('hidden');


// let score=0;
// let activePlayer=0;


// btnRoll.addEventListener('click',function(){
    
//     let dice=Math.trunc(Math.random()*6)+1;
//    if(dice!==1){
//     score+=dice;
// document.getElementById(`current--${activePlayer}`).textContent=score;
// document.img=()
//    }else{
//        score=0;
//        document.getElementById(`current--${activePlayer}`).textContent=score;
//          activePlayer=activePlayer===0 ? 1:0;
//    }
// });
             */

const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')

const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');

const diceEl=document.querySelector('.dice');

const currentScore0=document.querySelector('#current--0');
const currentScore1=document.querySelector('#current--1');

let currentScore=0;
let score=[0,0];

const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");
const btnNew=document.querySelector(".btn--new");

let activePlayer=0;
let playing=true;

const switchPlayer=()=>{

    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;  
  activePlayer=activePlayer===0 ?1:0;
 
 player0El.classList.toggle('player--active');
 player1El.classList.toggle('player--active');

}

btnRoll.addEventListener('click',()=>{

    if(playing){

    //    generating a random dice number
const dice=Math.trunc(Math.random()*6)+1;
diceEl.classList.remove('hidden');
diceEl.src=`dice-${dice}.png`;
// adding the current score value

if(dice!==1){
    // currentScore0=dice+currentScore0;
     currentScore+=dice;
   document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  
}else{

    switchPlayer();
}
    }
})

btnHold.addEventListener('click',()=>{
if(playing){
    score[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
    
    if(score[activePlayer]>=10){
    
        playing=false;
     diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`player--${activePlayer}`).classList.remove('player--active');

}else{
switchPlayer();
}
}
})

btnNew.addEventListener('click',()=>{

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    score=[0,0];
    score0El.textContent=0;    
    score1El.textContent=0;
   diceEl.classList.add('hidden');    
    playing=true;    
    activePlayer=0;


})

diceEl.classList.add('hidden');
score0El.textContent=0;
score1El.textContent=0;



                        



