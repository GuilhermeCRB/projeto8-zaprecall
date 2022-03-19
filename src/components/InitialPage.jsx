import {useState} from "react";

export default function InitialPage(){
    const [display, setDisplay] = useState(true);

    return ( display ?
        <section className="initial-page">
            <img src="./imgs/zap-icon.png" alt="ícone do ZapRecall" />
            <p className="nome-logo">ZapRecall</p>
            <button onClick={() => setDisplay(false)}>Iniciar Recall!</button>
        </section> : <></>
    );
}