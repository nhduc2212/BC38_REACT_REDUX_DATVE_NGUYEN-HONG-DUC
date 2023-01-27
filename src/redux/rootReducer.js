import { combineReducers } from 'redux';
import { clientInfoReducer } from './clientInfoReducer';
import { seatReducer } from './seatReducer';

export const rootReducer = combineReducers({
    clientInfoReducer,
    seatReducer
});
