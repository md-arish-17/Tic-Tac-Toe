import React from 'react'
import Board from './components/Board'
import "./App.css"

const App = () => {
  return (
    <div className='container'>
      <header>
        <h1>Tic Tac Toe</h1>
        <h4>Play.Think.Win</h4>
      </header>
      <main>
        <Board/>
      </main>
      <footer>
        <h4>Built with React.js</h4>
      </footer>
    </div>
  )
}

export default App