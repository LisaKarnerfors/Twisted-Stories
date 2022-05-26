import './style.css'
import { currentStep, leftBtnElement, rightBtnElement, startBtnElement, textElement } from "./gameLogicFunction"
import { gameData } from './gameData'



startBtnElement.addEventListener("click", () => {

  textElement.textContent = "";
  startBtnElement.classList.add("hide")
  leftBtnElement.classList.remove("hide")
  rightBtnElement.classList.remove("hide")

  currentStep(gameData[0]) 

})

 
/* const startDating: () => void = () => {

  /* currentStep(gameData[0]) 
  startDating() }*/
/* 
currentStep */


