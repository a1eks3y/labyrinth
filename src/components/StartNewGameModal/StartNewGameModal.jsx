import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import s from './StartNewGameModal.module.css'
import {generateNewLabyrinth} from '../../store/labyrinthActions'


const StartNewGameModal = () => {
    const {startX, isWin} = useSelector(state => state)
    const dispatch = useDispatch()
    if (startX !== undefined && isWin === undefined)
        return <></>
    const startGame = () => {
        dispatch(generateNewLabyrinth())
    }
    return (
        <div className={s.modal}>
            <button className={s.btn} onClick={startGame}>
                {startX === undefined ? 'Начать игру' : isWin ? 'Начать новую игру' : 'Попробовать ещё раз'}
            </button>
        </div>
    )
}

export default StartNewGameModal