import {createStore} from 'redux'
import {devToolsEnhancerDevelopmentOnly} from '@redux-devtools/extension'
import {labyrinthReducer} from './labyrinthReducer'


export const store = createStore(
    labyrinthReducer,
    devToolsEnhancerDevelopmentOnly()
)