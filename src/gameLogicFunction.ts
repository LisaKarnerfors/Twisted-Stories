import { GameStep } from "./types"
import { gameData } from "./gameData"

const textElement = document.querySelector("#questionText") as HTMLElement 
const leftBtnElement = document.querySelector("#leftBtn") as HTMLElement 
const rightBtnElement = document.querySelector("#rightBtn") as HTMLElement
const startBtnElement = document.querySelector("#startBtn") as HTMLElement


// Variabel för array gameData 
/* let currentState = gameData[0] 
console.log(currentState) */

/* startDating - function 
currentStep()*/


// Renderar ut frågorna
export const currentStep: (gameStep: GameStep) => void = (gameStep) => {

  if(!gameStep) {
    gameStep = gameData[0]
  }
 
  // Skriver ut options samt eventlyssnare
  leftBtnElement!.textContent = gameStep.options.left!.text
  leftBtnElement.addEventListener("click", () => { 
    nextStep(gameStep.options.left!.path) 
  })

  rightBtnElement!.textContent = gameStep.options.right!.text // kolla detta
  rightBtnElement.addEventListener("click", () => { 
    nextStep(gameStep.options.right!.path)
  }) 

  // Skriver ut frågan
  textElement!.textContent = gameStep.question!

}

export const nextStep: (id: number) => void = (id) => { 
  
  // forEach

 /*  gameData.forEach((GameStep) => {
 // ifsats
    currentStep(nextState) 
  } */



  for (let i = 0; i < gameData.length; i++) {

    const nextState = gameData[i];
      if(nextState.id == id) {
        currentStep(nextState)       
      }
    }

 } 


 //Video
 
/*  var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
} */