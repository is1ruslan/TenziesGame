import React from 'react';
import Die from './Die';
import './style.css';

export default function App () {
  const [dice, setDice] = React.useState(allNewDice());

  function randomDieValue() {
    return Math.ceil(Math.random() * 6);
  }

  function allNewDice() {
    const newArray = [];
    for(let i = 0; i < 10; i++) {
        const newDie = {
            value: randomDieValue(),
            held: false,
            id: i + 1
        }
        newArray.push(newDie);
    }
    return newArray;
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} {...die} hold={() => console.log('holded')} />
  ))

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
      <div className='die-container'>{diceElements}</div>
        <button className='roll-dice'>
          Roll
        </button>
    </main>
  )
}