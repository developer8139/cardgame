import cardBack from '../images/cardBack.png';
import blankCard2 from '../images/blankCard2.png';
import React from 'react';

export const Cards = ({select, selected}) => {
    const [clicked, setClicked] = React.useState(false);
    const [pointSystem, setPointSystem] = React.useState("");
    let card = React.useRef();
    let pointe = React.useRef();
   
    const handleCardSelection = (e) => {
        setClicked(true)
        let points = [100, 200, 300, 400, 500, 600, 700, 800, 900];
        
        card.current.classList.add = "game-rotate";
        pointe.current.style.display = "block";

    
        if(selected.length < 2) {
            setPointSystem(points[Math.floor(Math.random() * points.length)])
            select([...selected, pointe.current])
        }    
        
    }


    const checkCards = () => {
        //console.log(selected[0].innerText)
        if(parseInt(selected[0].innerText) === parseInt(selected[1].innerText)){
            alert("You made a match!!")
        } 
    }
    
    return (
    <>
        {!clicked ? 
        <img ref={card} className="game-card" onClick={handleCardSelection} src={cardBack} alt="card" style={{width: "210px", height: "250px", margin: "5px", cursor: "pointer"}} /> 
        : 
        <img className="back" style={{width: "210px", height: "250px", margin: "5px", cursor: "pointer"}} src={blankCard2} alt="blank"/>}
        <div ref={pointe} className="points">{pointSystem}</div>

        {selected.length === 2 ? checkCards() : ""}
    </>
    )
}