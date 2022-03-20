export default function Footer({numberOfQuestion, questionsAnswered, remembered}){
    const footerClass = questionsAnswered === 0 ? ("footer") : ("big-footer");

    return(
        <footer className={footerClass}>
            {/* {questionsAnswered === numberOfQuestion ? (
                <img src="./imgs/party.png" alt="" />
                <p></p>
            ) : ("")} */}
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
}