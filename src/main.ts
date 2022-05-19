import './style.css'
import { currentStep } from "./gameLogicFunction"
import { gameData } from './gameData';

/* import { gameData } from './gameData'
import { GameStep } from './types' */


// Steg 1 - startar spelet
const startGame:  () => void = () => {
  currentStep(gameData[0]); 

}

startGame()

