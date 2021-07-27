import {useHistory} from 'react-router';
import React from 'react';

export const StartingScreen = () => {
    let history = useHistory()
    const [amount, setAmount] = React.useState("");
    const [error, setError] = React.useState(false)
    

    const handleGetAmount = (e) => {
        if(parseInt(e.target.value) < 15) {
            setError(true)
        } else {
            setError(false)
        }
        setAmount(e.target.value)
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        history.push({
            pathname: "/Board",
            state: amount
        })
    }


    
    return (
        <>
        <h5>{error ? "Not a big enough number" : ""}</h5>
        <form onSubmit={handleFormSubmit}>
            <label>How Many Cards Do You Want?</label>
            <input type="number" value={amount} onChange={handleGetAmount}/>
            <button disabled={error ? true : false}>Start Game</button>
        </form>
        </>
    )
}