export const Cards = ({select, selected}) => {

    const handleCardSelection = (e) => {
        if(selected.length < 2) {
            select([...selected, e.target.innerText])
        }
    }


    return <div onClick={handleCardSelection} style={{border: "1px solid black", padding: "50px", margin: "5px", cursor: "pointer"}}>Card</div>
}