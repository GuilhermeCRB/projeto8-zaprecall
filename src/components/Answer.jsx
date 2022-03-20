export default function Answer({answer, setQuestionExhibition, setAnswerExhibition, setIcon, setStatus, questionsAnswered, setQuestionsAnswered, remembered, setRemembered}){
    function backToQuestion(icon, questionStatus){
        setStatus(questionStatus);
        setIcon(icon);
        setAnswerExhibition();
        setQuestionExhibition();
        setQuestionsAnswered(questionsAnswered + 1);
        setRemembered([...remembered, icon]);
    }

    return(
        <div className="flashcard-answer" >
            <p>{answer}</p>
            <div className="flashcard-answer_reactions">
                <div className="flashcard-answer_reactions_box reaction-didnt-remember" onClick = {() => backToQuestion("close-circle", "didnt-remember-question")}>
                    <span>Não lembrei</span>
                </div>
                <div className="flashcard-answer_reactions_box reaction-almost" onClick = {() => backToQuestion("help-circle", "almost-question")}>
                    <span>Quase não lembrei</span>
                </div>
                <div className="flashcard-answer_reactions_box reaction-zap" onClick = {() => backToQuestion("checkmark-circle", "zap-question")}>
                    <span>Zap!</span>
                </div>
            </div>
        </div>
    );
}