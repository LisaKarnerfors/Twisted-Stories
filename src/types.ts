
export interface GameStep {
    id: number,
    question?: string,
    image?: string 
    options?: {
    left?: {
      text: string,
      path: number 
    }
    right?: {
      text: string,
      path: number 
    }
  } 
}    
