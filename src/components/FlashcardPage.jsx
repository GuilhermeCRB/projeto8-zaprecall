import { useState } from "react";
import Flashcard from "./Flashcard";
import Footer from "./Footer"

export default function FlashcardPage(){
    const flashcards = [
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é...", answer: "...uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com...", answer: "...letra maiúscula"},
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {question: "O ReactDOM nos ajuda...", answer: "...interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para...", answer: "...gerenciar os pacotes necessários e suas dependências"},
        {question: "Usamos props para...", answer: "...passar diferentes informações para componentes "},
        {question: "Usamos estado (state) para...", answer: "...dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    ];

    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [remembered, setRemembered] = useState([]);

    return(
        <section className="flashcard-page">
            <Header />
            <Main flashcards={flashcards} questionsAnswered = {questionsAnswered} setQuestionsAnswered = {setQuestionsAnswered} remembered = {remembered} setRemembered = {setRemembered} />
            <Footer numberOfQuestion = {flashcards.length} questionsAnswered = {questionsAnswered} remembered = {remembered} />
        </section>
    );
}

function Header(){
    return(
        <header>
            <img src="./imgs/zap-icon.png" alt="ícone do ZapRecall" />
            <h1 className="nome-logo">ZapRecall</h1>
        </header>
    );
}

function Main({flashcards, questionsAnswered, setQuestionsAnswered, remembered, setRemembered}){
    return(
        <main>
            {flashcards.map(({answer,question},index)=>{
                return <Flashcard answer = {answer} question = {question} index = {index} questionsAnswered = {questionsAnswered} setQuestionsAnswered = {setQuestionsAnswered} remembered = {remembered} setRemembered = {setRemembered} />
            })}
        </main>
    );
}