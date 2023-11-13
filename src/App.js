import React, { useEffect } from 'react';
import Die from './Die';
import Confetti from 'react-confetti';
import './style.css';

export default function App () {
  const [dice, setDice] = React.useState(allNewDice());
  const [win, setWin] = React.useState(false);
  let [countRoll, setCountRoll] = React.useState(0);

  useEffect(() => {
    const dieValue = dice[0].value;
    const allHeld = dice.every(die => die.held);
    const allSameValue = dice.every(die => die.value === dieValue);

    if (allHeld && allSameValue) {
        setWin(true);
        setCountRoll(0);
    } else {
        setCountRoll(prevCount => prevCount + 1);
    }
  }, [dice]); 

  function holdDice(id) {
    const newDice = dice.map((die) =>
        die.id === id ?
        {...die, held: !die.held} :
        die
    )
    setDice(newDice);
  }

  function rollDice() {
    if (!win) {
            const newDice = dice.map((die, ind) => 
            die.held ?
            die :
            {value: randomDieValue(), held: false, id: ind+1}
          )
        setDice(newDice);
    } else {
        setDice(allNewDice);
        setWin(false);
    }
  }

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
    <Die key={die.id} {...die} hold={() => holdDice(die.id)} />
  ))

  return (
    <main>
        {win && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.</p>
      <div className='die-container'>{diceElements}</div>
        <p>{`Your count of roll: ${countRoll}`}</p>
        <button className='roll-dice' onClick={rollDice}>
          {win ? 'Reset Game' : 'Roll'}
        </button>
    </main>
  )
}