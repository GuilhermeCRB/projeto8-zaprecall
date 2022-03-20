import { useState } from "react";

export default function FlashcardFront({index, setQuestionExhibition, icon, iconsPool, status}){
    return(
        <div className={`flashcard ${status}`} onClick={() => setQuestionExhibition(index)}>
            <p>Pergunta {index + 1}</p>
            {iconsPool.map((iconFromPool) => {
                return iconFromPool === icon ? (<ion-icon className={icon} name={icon}></ion-icon>):("")
            })}
        </div>
    );
}                
