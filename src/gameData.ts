import { GameStep } from "./types";


export const gameData: GameStep [] = [
    {
        id: 1,
        question: "Är du redo att träffa kärleken?",
        options: 
            {
              left: { 
                    text:"Jag längtar efter kärlek", 
                    path: 2
                },
              right: { 
                    text: "Nej jag trivs som ungkarl",
                    path: 8 
                }
            }
    }, 
    {
        id: 2,
        question: "Jag önskar jag hade någon jag kunde dela ____ med.",
        options:
            {
              left: { 
                  text: "Sängen",
                  path: 8 
              },
              right: {
                  text: "Spela Boul",
                  path: 3
            }
        }
    },
    {
        id: 3,
        question: "Är du den som dansar på bordet efter några tequlia eller somnar du under bordet?",
        options: 
            {
              left: { 
                  text: "Dansar alltid på bordet",
                  path: 4
            },
              right: { 
                  text: "Somnar garanterat under bordet",
                  path: 8
            }
        }
    },
    {
        id: 4,
        question: "Vad gör du helst på första Dejten?",
        options:
            {
              left: { 
                  text: "Spelar boul på Boulbar",
                  path: 5
              },
              right: {
                  text: "Går på Bio", 
                  path: 8
            }
        }
    },
    {
        id: 5,
        question: 'Vad värdesätter du hos en partner?',
        options: 
            {
              left: {
                  text: "Pengar, fysisk attraktion, att hen spelar boul ",
                  path: 8 
              },
              right: {
                  text: "Trygghet, humor & att hen spelar boul",
                  path: 6
            }
        }
    
    },
    {
        id: 6,
        question: "Vad skulle du ta med dig till en öde ö?",
        options: 
            {
              left: {
                  text: "Boulspel utan tvekan!",
                  path: 7
              },
              right: {
                  text: "Givetvis dig!",
                  path: 8
            }
        }
 
    
    },
    {
        id: 7, 
        image: "../src/images/bild.png", 
        question: "Wohooo båda gillar Boul!",
        options: 
         {
              left: {
                  text: "",
                  path: 1
              },
              right: {
                  text: "",
                  path: 1
            }
        } 
    
    },
    {  
        id: 8,
        question: "Vill du ge speed dejting ett nytt försök??",
        options:
            {
              left: {
                  text: "Börja om här!",
                  path: 1
            }
    }
}
]
