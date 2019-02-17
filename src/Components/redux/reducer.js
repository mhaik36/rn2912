import { combineReducers } from 'redux';
import { filterModeReducer } from './filterMode.reducer';
import { wordReducer } from './words.reducer';
import { shouldShowFormReducer } from './shouldShowForm.reducer';



export const reducer = combineReducers({
    words: wordReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
})
