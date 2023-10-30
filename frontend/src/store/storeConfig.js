import {configureStore, combineReducers, applyMiddleware} from 'redux'
import { createWrapper } from "next-redux-wrapper"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todo: () => ({
        Description: 'tarefa',
        List: [{
            id: 1,
            Description: 'tarefa 1'
        },
        {
            id: 2,
            Description: 'tarefa 2'
    }]
    })
})

function storeConfig(){
    return(
        configureStore(rootReducer, applyMiddleware(thunk))
    )
}

export default storeConfig