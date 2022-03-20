import {useState} from "react"
import Question from "./Question"
import Answer from "./Answer"
import FlashcardFront from "./FlashcardFront";

export default function Flashcard({answer, question, index, questionsAnswered, setQuestionsAnswered, remembered, setRemembered}){
    const [questionExhibition, setQuestionExhibition] = useState();
    const [answerExhibition, setAnswerExhibition] = useState();
    const [status,setStatus] = useState("")
    const [icon,setIcon] = useState("play-outline");

    const iconsPool = ["play-outline", "close-circle", "help-circle", "checkmark-circle"];
    
    return  (index === questionExhibition && status === "") ?( 
        index === answerExhibition ?(
            <Answer answer = {answer} setQuestionExhibition = {setQuestionExhibition} setAnswerExhibition = {setAnswerExhibition} setIcon = {setIcon} index = {index} setStatus = {setStatus} questionsAnswered = {questionsAnswered} setQuestionsAnswered = {setQuestionsAnswered} remembered = {remembered} setRemembered = {setRemembered} />
        ) : (
            <Question question = {question} index = {index} showAnswer = {setAnswerExhibition} setQuestionExhibition = {setQuestionExhibition} />
        )
    ) : (<FlashcardFront index = {index} setQuestionExhibition = {setQuestionExhibition} icon = {icon} iconsPool = {iconsPool} status = {status} />)
} 