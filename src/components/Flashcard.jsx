import {useState} from "react"

export default function Flashcard({flashcards}){
    const [questionExhibition, setQuestionExhibition] = useState("");
    const [answerExhibition, setAnswerExhibition] = useState("");
    
    return( 
        flashcards.map((flashcard,index)=>{
           return( 
            <div className="flashcard">
                <p>Pergunta {index + 1}</p>
                <ion-icon className="play-icon" name="play-outline"></ion-icon>
            </div>
           )
        })
    );
} 