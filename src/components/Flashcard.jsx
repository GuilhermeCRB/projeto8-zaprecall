import {useState} from "react"
import Question from "./Question"
import Answer from "./Answer"

export default function Flashcard({flashcards}){
    const [questionExhibition, setQuestionExhibition] = useState();
    const [answerExhibition, setAnswerExhibition] = useState();
    
    return( 
        flashcards.map(({answer,question},index)=>{

            return  index === questionExhibition ?( 
                index === answerExhibition ?(
                    <div className="flashcard-answer" >
                        <Answer answer = {answer} />
                    </div>
                ) : (
                    <div className="flashcard-question" onClick={() => setQuestionExhibition(index)}>
                        <Question question = {question} index = {index} showAnswer = {setAnswerExhibition} />
                    </div>
                )
            ) : (
                <div className="flashcard" onClick={() => setQuestionExhibition(index)}>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon className="play-icon" name="play-outline"></ion-icon>
                </div>
            )
        })
    );
} 