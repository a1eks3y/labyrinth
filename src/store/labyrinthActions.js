export const getRandomNumber = (max) => Math.floor(Math.random() * (max + 1))

export const GENERATE_NEW_LABYRINTH = 'GENERATE_NEW_LABYRINTH'
export const STEP_LEFT = 'LEFT'
export const STEP_RIGHT = 'RIGHT'
export const STEP_UP = 'UP'
export const STEP_DOWN = 'DOWN'

export const generateNewLabyrinth = () => ({
    type: GENERATE_NEW_LABYRINTH
})

export const CHOOSE_CELL = 'CHOOSE_CELL'

export const chooseCell = (chosenX, chosenY) => ({
    type: CHOOSE_CELL,
    payload: {
        chosenX,
        chosenY
    }
})