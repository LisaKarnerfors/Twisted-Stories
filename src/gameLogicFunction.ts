import { GameStep } from "./types"
import { gameData } from "./gameData"

export let textElement = document.querySelector("#question-text") as HTMLElement 
export let startBtnElement = document.querySelector(".start-btn") as HTMLButtonElement
export let leftBtnElement = document.querySelector(".left-btn") as HTMLButtonElement 
export let rightBtnElement = document.querySelector(".right-btn") as HTMLButtonElement
let imageElement = document.querySelector("#imgage-div") as HTMLImageElement
export let imgElement = document.querySelector(".img-div") as HTMLImageElement

let currentState = gameData[0] 


export const currentStep: (gameStep: GameStep) => void = (gameStep) => {

    textElement.textContent = gameStep.question!

    if(gameStep.options!.left!) {
      leftBtnElement.textContent = gameStep.options!.left.text 
    }
    
    if(gameStep.options!.right!) { 
      rightBtnElement.textContent = gameStep.options!.right.text
    }

    if(gameStep.id == 9) {
      rightBtnElement.classList.add("hide")
    } else {
      rightBtnElement.classList.remove("hide")
    }

    if(gameStep.id == 8) {
      leftBtnElement .classList.add("hide")
      rightBtnElement.classList.add("hide")
    } 

    if(gameStep.id == 8) { 
      let image = document.createElement("img")
      image.classList.add("image-div")
      image.src = gameStep.image!
      imageElement?.append(image)
  
    }  

    if(gameStep.id == 8) {
      imgElement.classList.add("hide")
    } else {
      imgElement.classList.remove("hide")
    }
}
 

    
  leftBtnElement.addEventListener('click',() => { 
    nextStep(currentState.options!.left!.path) 
  });


 rightBtnElement.addEventListener('click', () => {
    nextStep(currentState.options!.right!.path) 
 });

 
const nextStep: (id: number) => void = (id) => {

  for(let i = 0; i < gameData.length; i ++ ) {

    const state = gameData[i];

      if(state.id == id) {
        currentState = state
        currentStep(state)
      }
    }
}






