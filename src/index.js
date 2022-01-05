import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.ime}</p>
      <p>Ti imaš {props.godine} godine</p>
    </div>
  )
}

const Pozdrav = () => {
  return(
    <div>
      <p>Dobar dan</p>
    </div>
  )
}

const App = () => {
  const anaGodine=23
  return (
  <div className='glavniDiv'>
    <h1>Pozdravi</h1>
    <Hello ime="Tomo" godine={22}/>
    <Hello ime="Ana" godine={anaGodine}/>
    <Hello ime="Dario" godine={4+8}/>
    <Pozdrav />
  </div>
  )
 }

 ReactDOM.render(<App />, document.getElementById('root'));