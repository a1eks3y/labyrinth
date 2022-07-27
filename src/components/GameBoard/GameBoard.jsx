import React from 'react'
import Cell from './Cell/Cell'
import s from './GameBoard.module.css'


const GameBoard = () => {
    return (
        <main className={s.gameBoard}>
            <Cell x={0} y={0}/>
            <Cell x={1} y={0}/>
            <Cell x={2} y={0}/>
            <Cell x={0} y={1}/>
            <Cell x={1} y={1}/>
            <Cell x={2} y={1}/>
            <Cell x={0} y={2}/>
            <Cell x={1} y={2}/>
            <Cell x={2} y={2}/>
        </main>
    )
}

export default GameBoard