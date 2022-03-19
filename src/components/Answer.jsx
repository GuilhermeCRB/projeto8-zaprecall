export default function Answer({answer}){
    return(
        <>
            <p>{answer}</p>
            <div className="flashcard-answer_reactions">
                <div className="flashcard-answer_reactions_box reaction-didnt-remember">
                    <span>Não lembrei</span>
                </div>
                <div className="flashcard-answer_reactions_box reaction-almost">
                    <span>Quase não lembrei</span>
                </div>
                <div className="flashcard-answer_reactions_box reaction-zap">
                    <span>Zap!</span>
                </div>
            </div>
        </>
    );
}