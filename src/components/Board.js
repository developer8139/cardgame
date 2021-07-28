import React from 'react';
import {Cards} from './Cards';
import {useLocation} from 'react-router-dom';

export const Board = () => {
    const [selected, setSelected] = React.useState([]);
    const location = useLocation();
    let pieces = [];

    
    for(let i = 0; i < parseInt(location.state); i++) {
        pieces.push(i)
    }
    

    console.log(selected)
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {pieces.map(() => <Cards select={setSelected} selected={selected} />)}
        </div>
    )
}