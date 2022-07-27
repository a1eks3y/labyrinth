import React from 'react'
import StepCell from './StepCell/StepCell'
import {useSelector} from 'react-redux'
import s from './Steps.module.css'


const Steps = () => {
    const steps = useSelector(state => state.steps)
    return (
        <div className={s.steps}>
            {
                steps.map((step, inx) =>
                    <StepCell step={step} delay={inx === 0 ? 0 : inx - 1} key={inx}/>
                )
            }
        </div>
    )
}

export default Steps