import React from 'react'
import ArrowIcon from '../../../images/Arrow.svg'
import s from './StepCell.module.css'
import {STEP_DOWN, STEP_LEFT, STEP_RIGHT, STEP_UP} from '../../../store/labyrinthActions'
import {useSelector} from 'react-redux'


const stepDirectionToDegree = {
    [STEP_UP]: '0deg',
    [STEP_DOWN]: '180deg',
    [STEP_LEFT]: '-90deg',
    [STEP_RIGHT]: '90deg'
}

const StepCell = ({step, delay}) => {
    const isWin = useSelector(state => state.isWin)
    if (!step)
        return <div className={s.inactive_cell}/>
    return (
        <div className={s.cell + (isWin === undefined ? ' ' + s.animate : '')}
             style={{animationDelay: delay + 's'}}>
            <img
                className={s.icon}
                src={ArrowIcon}
                alt={step.replace('_', ' ').toLowerCase()}
                style={{
                    transform: `rotate(${stepDirectionToDegree[step]})`
                }}
            />
        </div>
    )
}

export default StepCell