import React from 'react'
import s from './Cell.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {chooseCell} from '../../../store/labyrinthActions'
import startIcon from '../../../images/startIcon.png'
import winIcon from '../../../images/winIcon.svg'
import loseIcon from '../../../images/loseWrongFinishIcon.svg'
import loseFinishIcon from '../../../images/loseFinishIcon.png'


const Cell = ({x, y}) => {
    const dispatch = useDispatch()
    const {startX, startY, isWin, chosenX, chosenY, finishY, finishX} = useSelector(state => state)
    const clickHandler = () => {
        dispatch(chooseCell(x, y))
    }
    if (isWin === undefined)
        return <div className={s.cell} onClick={clickHandler}>
            {
                startX === x && startY === y && <img className={s.icon} src={startIcon} alt='start'/>
            }
        </div>
    return (
        <div className={s.cell}>
            {
                isWin ?
                    finishX === x && finishY === y && <img className={s.icon} src={winIcon} alt='win'/>
                    :
                    (finishX === x && finishY === y && <img className={s.icon} src={loseFinishIcon} alt='finish' />) ||
                    (chosenX === x && chosenY === y && <img className={s.icon} src={loseIcon} alt='your pick'/>)
            }
        </div>
    )
}

export default Cell