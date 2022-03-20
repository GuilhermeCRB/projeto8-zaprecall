export default function Footer({numberOfQuestion, questionsAnswered, remembered}){
    const footerClass = questionsAnswered === 0 ? ("footer") : ("big-footer");

    return(
        <footer className={footerClass}>
            {questionsAnswered === numberOfQuestion ? (deckResult()) : ("")}
            <p>{questionsAnswered}/{numberOfQuestion} CONCLUÍDOS</p>
            <div className="footer_status-questions">
                {remembered.map((icon => {
                    return (
                        <ion-icon className={icon} name={icon}></ion-icon>
                    )
                }))}
            </div>
        </footer>
    );

    function deckResult(){
        const result = remembered.filter((answer) => {
            console.log("entrei")
            if(answer === "close-circle"){
                return true;
            }else{
                return false;
            }
        })

        if(result.length === 0){
            return (
                <>
                    <div className="footer_result">
                        <img src="./imgs/party.png" alt="" />
                        <p>Parabéns!</p>
                    </div>
                    <p className="footer_result_message">Você não esqueceu de nenhum flashcard!</p>
                </>
            )
        }else{
            return (
                <>
                    <div className="footer_result">
                        <img src="./imgs/sad.png" alt="" />
                        <p>Putz...</p>
                    </div>
                    <p className="footer_result_message">Ainda faltam alguns... <br /> Mas não desanime!</p>
                </>
            )
        }
    }
}