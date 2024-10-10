import { useState } from "react";
import "../Cards/Cards.scss"
import imgHeart from "../../assets/images/heart.svg"

export function Cards({ data, title, content }) {

    //adicionando cor de fundo ao icon ao ser clicado
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
      };


    return (
        <>
            <div className="card">
                    <div className="data-and-icon">
                        <p className="published-date">{data}</p>
                        <img src={imgHeart} alt="" className="icon" onClick={handleClick} style={{ backgroundColor: isClicked ? '#e07b67' : 'transparent' }} />
                    </div> 

                    <h1>{title}</h1>
                    <p>{content}</p>
            </div>
        </>
    )
}