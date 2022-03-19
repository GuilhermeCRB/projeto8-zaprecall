export default function FlashcardPage(){
    return(
        <section className="flashcard-page">
            <Header />
            <Main />
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

function Main(){
    return(
        <main>
            <p className="flashcard">Flashcards</p>
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