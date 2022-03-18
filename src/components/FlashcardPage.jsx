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
            <p className="nome-logo">ZapRecall</p>
        </header>
    );
}

function Main(){
    return(
        <main>
            <p className="">Flashcards</p>
        </main>
    );
}

function Footer(){
    return(
        <footer>
            <p className="">0/4 CONCLUÍDOS</p>
        </footer>
    );
}