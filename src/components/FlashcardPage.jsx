import Flashcard from "./Flashcard";

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

    return(
        <section className="flashcard-page">
            <Header />
            <Main flashcards={flashcards} />
            <Footer />
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

function Main({flashcards}){
    return(
        <main>
            <Flashcard flashcards={flashcards} />
        </main>
    );
}

function Footer(){
    return(
        <footer>
            <p>0/4 CONCLUÍDOS</p>
        </footer>
    );
}