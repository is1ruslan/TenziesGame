import React from 'react';

export default function Die(props) {
    const background = props.held ? 'held' : '';

    return (
        <div className={`die-face ${background}`} onClick={() => console.log('clicked')}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}