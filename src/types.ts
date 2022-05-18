
export interface GameStep {
  id: number,
  question: string,
  options: {
  left: {
    text: string,
    path: number 
  },  
  right?: {
    text: string,
    path: number 
  }
} 
}    

// Fortsätt med interfaces