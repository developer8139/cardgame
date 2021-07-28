import {useHistory} from 'react-router';
import React from 'react';

const startingInput = {
    padding: "20px",
    fontSize: "20px",
    width: "40px",
}


const startingForm = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "450px",
    margin: "0 auto"
}


const startingBtn = {
    padding: "10px",
    cursor: "pointer",
    width: "300px"
}


const startingTitle = {
    fontSize: "25px",
    marginBottom: "5px"
}

const startingError = {
    color: "red"
}


const background = {
    backgroundColor: "lightgrey",
    height: "100vh"
}


export const StartingScreen = () => {
    let history = useHistory()
    const [amount, setAmount] = React.useState("");
    const [error, setError] = React.useState(false)
    

    const handleGetAmount = (e) => {
        if((parseInt(e.target.value) < 15 || parseInt(e.target.value) > 40) || parseInt(e.target.value) % 2) {
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
        <div style={background}>
            <h5 style={startingError}>{error ? "Not a valid number" : ""}</h5>
            <form style={startingForm} onSubmit={handleFormSubmit}>
                <label style={startingTitle}>How Many Cards Do You Want?</label>
                <h5>Please Enter a number between 15 - 40:</h5>
                <input style={startingInput} type="number" value={amount} onChange={handleGetAmount}/>
                <button style={startingBtn} disabled={error ? true : false}>Start Game</button>
            </form>
        </div>
    )
}