import './App.css'
import ReactDOM from 'react-dom'
import { BsFillLockFill } from 'react-icons/bs'
import { createStore } from 'redux'

const numpadStore = (numbers = '', action) => {
  switch(action.type) {
    case 'clear':
      return ''
    case '+':
      if (numbers.length !== 4) {
        return numbers + action.value
      } else {
        return action.value
      }
      
    default:
      return numbers
  }
}

const store = createStore(numpadStore)

const testInput = async (numbers) => {
  if (numbers.length === 4) {
    fetch('/test', {
      method: 'POST',
      body: JSON.stringify({"numbers": numbers}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json()).then(function(response) {
      if (response.message === 'correct') {
        const lock = document.getElementsByClassName("lock-icon-button")
        lock[0].style.color='green'
      }
    })
  }
}

const App = () => {
  testInput(store.getState())

  return (
    <div className="container">
      <h1>Numberpad</h1>
      <p>The lock on lower right corner will turn green when correct 4 digit pin has been inserted.</p>
      <p>C-button on lower left will clear your input. Input will also reset after 4 digits.</p>
      <button key='1' onClick={e => store.dispatch({ type:'+', value:'1' })} value='1'>1</button>
      <button key='2' onClick={e => store.dispatch({ type:'+', value:'2' })} value='2'>2</button>
      <button key='3' onClick={e => store.dispatch({ type:'+', value:'3' })} value='3'>3</button>
      <button key='4' onClick={e => store.dispatch({ type:'+', value:'4' })} value='4'>4</button>
      <button key='5' onClick={e => store.dispatch({ type:'+', value:'5' })} value='5'>5</button>
      <button key='6' onClick={e => store.dispatch({ type:'+', value:'6' })} value='6'>6</button>
      <button key='7' onClick={e => store.dispatch({ type:'+', value:'7' })} value='7'>7</button>
      <button key='8' onClick={e => store.dispatch({ type:'+', value:'8' })} value='8'>8</button>
      <button key='9' onClick={e => store.dispatch({ type:'+', value:'9' })} value='9'>9</button>
      <button key='C' onClick={e => store.dispatch({ type:'clear', value:'C' })} value='C' type='clear'>C</button>
      <button key='0' onClick={e => store.dispatch({ type:'+', value:'0' })} value='0'>0</button>
      <button className='lock-icon-button' disabled key='L' value='L'><BsFillLockFill /></button>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

export default App
