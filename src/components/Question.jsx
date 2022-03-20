export default function Question({question, index, showAnswer, setQuestionExhibition}){
    return(
        <div className="flashcard-question" onClick={() => setQuestionExhibition(index)}>
            <p>{question}</p>
            <img src="./imgs/turn.svg" alt="turn flashcard" onClick = {() => showAnswer(index)} />
        </div>
    );
}