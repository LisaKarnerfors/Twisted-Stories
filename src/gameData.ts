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
                    path: 9 
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
                  path: 9 
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
                  path: 9
            }
        }
    },
    {
        id: 4,
        question: "Vad gör du helst på första dejten?",
        options:
            {
              left: { 
                  text: "Spelar boul på Boulbar",
                  path: 5
              },
              right: {
                  text: "Går på Bio", 
                  path: 9
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
                  path: 9 
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
                  path: 9
            }
        }
 
    
    },
    {
        id: 7, 
        question: "Vi har ett resultat... Är du nyfiken på resultatet eller vill du börja om?",
        options: 
         {
              left: {
                  text: "Jag är sååå nyfiken!!!",
                  path: 8
              },
              right: {
                  text: "Jag vill börja om!",
                  path: 1
            }
        }
    },
    { 
        id: 8, 
        image: "../src/images/boul.JPG", 
        question: "Grattis till den perfekta matchningen! Nu kan ni går vidare till Boulbar! 😍🥳",
        options: 
         {
              left: {
                  text: "",
                  path: 0
              },
              right: {
                  text: "",
                  path: 0
            }
        } 
    
    },
    {  
        id: 9,
        question: "Tyvärr, detta var ingen bra matchning.. 😔 Ge inte upp hoppet på kärleken!",
        options:
            {
              left: {
                  text: "Försök på nytt här!",
                  path: 1
            }
    }
}
]
