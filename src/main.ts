import './style.css'
import { currentStep, leftBtnElement, rightBtnElement, startBtnElement, textElement, imgElement } from "./gameLogicFunction"
import { gameData } from './gameData'


const startDating: () => void = () => {

  startBtnElement.addEventListener("click", () => {

  textElement.textContent = "";
  startBtnElement.classList.add("hide")
  leftBtnElement.classList.remove("hide")
  rightBtnElement.classList.remove("hide")
  imgElement.classList.add("hide")

  currentStep(gameData[0]) 

})
}
 

startDating() 


