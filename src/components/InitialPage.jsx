import {useState} from "react";

export default function InitialPage(){
    const [display, setDisplay] = useState(true);

    return ( display ?
        <section className="initial-page">
            <img src="./imgs/zap-icon.png" alt="ícone do ZapRecall" />
            <h1 className="nome-logo">ZapRecall</h1>
            <button onClick={() => setDisplay(false)}>Iniciar Recall!</button>
        </section> : <></>
    );
}