import { gameData } from './gameData'
import { GameStep } from './types' 

const textElement = document.getElementById("questionText") as HTMLElement 
const leftBtnElement = document.querySelector("#leftBtn") as HTMLElement 
const rightBtnElement = document.querySelector("#rightBtn") as HTMLElement

// Steg 1 - startar spelet
const startGame:  () => void = () => {
    currentStep(gameData[0]); 
  
  }
  
  startGame()
     
  
  // Variabel för array gameData 
  /* let currentState = gameData[0] 
  console.log(currentState) */
  
  // Renderar ut frågorna
  export const currentStep: (gameStep: GameStep) => void = (gameStep) => {
  
    if(!gameStep) {
      gameStep = gameData[0]
    }
   
    // Skriver ut options samt eventlyssnare
    leftBtnElement!.textContent = gameStep.options.left.text
    leftBtnElement.addEventListener("click", () => { 
      nextStep(gameStep.options.left.path) 
    })
  
    rightBtnElement!.textContent = gameStep.options.right!.text // kolla detta
    rightBtnElement.addEventListener("click", () => { 
      nextStep(gameStep.options.right!.path)
    }) 
  
    // Skriver ut frågan
    textElement!.textContent = gameStep.question
  
  }
  
  export const nextStep: (id: number) => void = (id) => { 
    
    // forEach
    /* textNode.options.forEach(option => {
    if (showOption(option)) { 
      renderQuestion(nextState) */

  
   } 
  
  
  
  
  
  




