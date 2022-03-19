export default function Question({question, index, showAnswer}){
    return(
        <>
            <p>{question}</p>
            <img src="./imgs/turn.svg" alt="turn flashcard" onClick = {() => showAnswer(index)} />
        </>
    );
}