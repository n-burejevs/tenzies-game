import React from 'react'
import './App.css'
import Die from './Die.jsx'
//import nanoid from "nanoid"

function App() {

const [dice, setDice] = React.useState(allNewDice())

  function allNewDice()
  {
    let newDice = []
    for(let i = 0; i<10; i++)
    {
      newDice.push(Math.ceil(Math.random() * 6))
    }
   return newDice;
  }
  const diceElements = dice.map(die => <Die value={die} />)


  return (
    <main className='main-content'>
      <div className='tenzies-grid'>
        {diceElements}
        
      </div>
    </main>
  )
}

export default App
