import React, { useEffect } from 'react'
import './App.css'
import Die from './Die.jsx'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
/*
css put real dots on dice
track numbers of rolls
track the time to win
save best time to localstorage
*/
function App() {

const [dice, setDice] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)
const [rollCount, setRollCount] = React.useState(0)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
          setTenzies(true)
        }
  }, [dice]);


  function allNewDice()
  {
    let newDice = []
    for(let i = 0; i<10; i++)
    {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
         isHeld: false,
        id: nanoid()
        })
    }
   return newDice;
  }

  function rollDice() {
    if(!tenzies) {
      setRollCount(count => count +1)
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
        setRollCount(0)
    }
}
/*
 function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    }*/
        function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
        }

  function holdDice(id)
  {
   setDice(oldDice => oldDice.map(die => {
    return die.id===id ?   {...die, isHeld: !die.isHeld} : die
   }))

  }

  const diceElements = dice.map(die => <Die 
    key={die.id}
     value={die.value}
      isHeld={die.isHeld}
       holdDice={()=>holdDice(die.id)}/>)


  return (
    <main className='main-content'>
       {tenzies && <Confetti />}
       <h1 className="title">Tenzies</h1>
       {tenzies ?  <p className="instructions">You won the game with {rollCount} rolls!</p> : <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}
      <div className='tenzies-grid'>
        {diceElements}
      </div>
  
      <button onClick={rollDice} className='roll-button'>
         {tenzies ? "New game": "Roll"}
        </button>
     

    </main>
  )
}

export default App
