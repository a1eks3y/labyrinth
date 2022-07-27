import React from 'react'
import GameBoardCell from './GameBoardCell/GameBoardCell'
import s from './GameBoard.module.css'
import StartNewGameModal from '../StartNewGameModal/StartNewGameModal'


const GameBoard = () => {
    return (
        <main className={s.gameBoard}>
            <GameBoardCell x={0} y={0}/>
            <GameBoardCell x={1} y={0}/>
            <GameBoardCell x={2} y={0}/>
            <GameBoardCell x={0} y={1}/>
            <GameBoardCell x={1} y={1}/>
            <GameBoardCell x={2} y={1}/>
            <GameBoardCell x={0} y={2}/>
            <GameBoardCell x={1} y={2}/>
            <GameBoardCell x={2} y={2}/>
            <StartNewGameModal/>
        </main>
    )
}

export default GameBoard