import React, { useEffect, useState } from 'react'
import Cell from './Cell'

const Board = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xTurn, setXTurn] = useState(true)

    const checkWinner = ()=>{
        const winPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let winning of winPatterns){
            const [a,b,c] = winning
            if(board[a] !== null && board[a] === board[b] && board[a] === board[c]){
                return board[a]
            }
        }
        if(!board.includes(null)){
            return "Draw"
        }
        return false
    }

    const result = checkWinner()

    const handleClick = (index)=>{
        if(board[index] !== null){
            return
        }
        const copyState = [...board] 
        copyState[index] = xTurn ? "X" : "O"
        setBoard(copyState)   
        setXTurn(!xTurn)  
        // console.log(board)  
    }
// console.log(board);

    const resetBtn = ()=>{
        setBoard(Array(9).fill(null))
        setXTurn(true)
    }

    useEffect(()=>{
        checkWinner()
        console.log("Usman")
    },[board])

  return (
    <div>
        <div>Current Player : Player {xTurn ? "X" : "O"}</div>
        <div>game board</div>
        <div className='cellCon'>
            {
                result ? (<>
                {
                    result === "Draw" ? (
                        <h2 className='drawText'>Its a draw</h2>
                    ) : (
                        <h2 className='winnerText'>Player {result} won the game</h2>
                    )
                }
                </>) : (
                <>
                <div className='cellRow'>
                    <Cell value={board[0]} cellFunc={()=>{handleClick(0)}}/>
                    <Cell value={board[1]} cellFunc={()=>{handleClick(1)}}/>
                    <Cell value={board[2]} cellFunc={()=>{handleClick(2)}}/>
                </div>
                <div className='cellRow'>
                    <Cell value={board[3]} cellFunc={()=>{handleClick(3)}}/>
                    <Cell value={board[4]} cellFunc={()=>{handleClick(4)}}/>
                    <Cell value={board[5]} cellFunc={()=>{handleClick(5)}}/>
                </div>
                <div className='cellRow'>
                    <Cell value={board[6]} cellFunc={()=>{handleClick(6)}}/>
                    <Cell value={board[7]} cellFunc={()=>{handleClick(7)}}/>
                    <Cell value={board[8]} cellFunc={()=>{handleClick(8)}}/>
                </div>
                </>
                )
            }
        </div>
        <section className='btnSec'>
            <button onClick={resetBtn}>Restart Game</button>
            <button>Reset Score</button>
        </section>
    </div>
  )
}

export default Board