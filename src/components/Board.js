import React from 'react';
import {Cards} from './Cards';

export const Board = ({numOfCards}) => {
    const [state, setState] = React.useState({cards: [], numberOfCards: 15})

    React.useEffect(() => {
        if(numOfCards > 15) {
            setState(() => ({
                numberOfCards: numOfCards
            }))
        }
    }, [numOfCards])

    return (
        <div>
            {state.cards.length > 0 ? state.cards.map(() => <Cards />) : ""}
        </div>
    )
}