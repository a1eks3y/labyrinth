import {
    CHOOSE_CELL,
    GENERATE_NEW_LABYRINTH,
    getRandomNumber,
    STEP_DOWN,
    STEP_LEFT,
    STEP_RIGHT,
    STEP_UP
} from './labyrinthActions'


export const labyrinthReducer = (state = {}, action) => {
    switch (action.type) {
        case GENERATE_NEW_LABYRINTH: {
            const startX = getRandomNumber(2)
            const startY = getRandomNumber(2)
            let curX = startX
            let curY = startY
            const steps = []
            for (let i = 0; i < 10; i++) {
                const possibleSteps = []
                if (curX !== 0)
                    possibleSteps.push(STEP_LEFT)
                if (curX !== 2)
                    possibleSteps.push(STEP_RIGHT)
                if (curY !== 0)
                    possibleSteps.push(STEP_UP)
                if (curY !== 2)
                    possibleSteps.push(STEP_DOWN)

                const step = possibleSteps[getRandomNumber(possibleSteps.length - 1)]

                if (step === STEP_LEFT)
                    curX--
                if (step === STEP_RIGHT)
                    curX++
                if (step === STEP_UP)
                    curY--
                if (step === STEP_DOWN)
                    curY++

                steps.push(step)
            }
            return {
                startX,
                startY,
                finishX: curX,
                finishY: curY,
                steps
            }
        }
        case CHOOSE_CELL:
            if (state.finishX === action.payload.chosenX && state.finishY === action.payload.chosenY)
                return {
                    ...state,
                    isWin: true
                }
            return {
                ...state,
                isWin: false,
                chosenX: action.payload.chosenX,
                chosenY: action.payload.chosenY
            }
        default:
            return state
    }
}