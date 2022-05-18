import { GameStep } from "./types";

// Fixa fler frågor till rätt fråga

export const gameData: GameStep[] = [
    {
        id: 1,
        question: 'Är du redo att träffa kärleken?',
        options: 
            {
              left: { 
                    text:"Jag längtar efter kärlek", 
                    path: 2 
                },
              right: { 
                    text: "Nej jag trivs som ungkarl",
                    path: 6 
                }
            }
    }, 
    {
        id: 2,
        question: 'Jag önskar jag hade någon jag kunde dela ____ med.',
        options:
            {
              left: { 
                  text: "Livet",
                  path: 3
              },
              right: {
                  text: "Sängen",
                  path: 1
            }
        }
    },
    {
        id: 3,
        question: 'Är du den som dansar på bordet efter några tequlia eller somnar du under bordet?',
        options: 
            {
              left: { text: "Dansar alltid på bordet",
              path: 4
            },
              right: { text: "Somnar garanterat under bordet",
              path: 1
            }
        }
    },
    {
        id: 4,
        question: 'Gillar du att spela boul? ',
        options:
            {
              left: { 
                  text: "Det är min favorit sport",
                  path: 5
              },
              right: {
                  text: "Nja, det är för gamlingar",
                  path: 1
            }
        }
    },
    {
        id: 5,
        question: 'Vad värdesätter du hos en partner?',
        options: 
            {
              left: {
                  text: "Pengar, fysisk attraktion, rumpa & bröst ",
                  path: 1
              },
              right: {
                  text: "Trygghet, humor & tillit",
                  path: 1
            }
        }
    
    },
    { // Fixa ett steg till gameover
        id: 6,
        question: 'Bättre lycka nästa gång!',
        options:
            {
              left: {
                  text: "Vill du börja om?",
                  path: 1
            }
    }
}
]
