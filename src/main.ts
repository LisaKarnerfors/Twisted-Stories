import './style.css'

/* const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
` */

/* Skapa html-element */

/* <div id="container">
      <h1 id="resultText"></h1>
      <button id="leftBtn"></button>
      <button id="rightBtn"></button> */


/* const result = document.querySelector("#resultText")!;
console.log(result); */

/* const left = document.querySelector<HTMLDivElement>('#leftBtn')!;
leftBtn?.addEventListener("click", ) 
console.log(left) */
/*
const left = document.querySelector("#leftBtn")!;

const right = document.querySelector("#rightBtn")!; 
rightBtn?.addEventListener("click", ); */


/* Elements TypeScript */




/* Interfaces */
interface Person {
  firstName: string;
  lastName: string; 
}

/* Function */
function dating(person: Person) {
  return "Are you ready for dating, " + person.firstName + " " + person.lastName; 
}

/* Variabel */
let user = { firstName: "Wic",  lastName: "toria" };
console.log(user);

/* Kallar och skriver ut på sidan */
document.body.textContent = dating(user);


/* function nextQuestion() {
 

} */

/* function currentQuestion() {

} */