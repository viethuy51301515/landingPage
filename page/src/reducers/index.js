import dataReducer from './dataReducer';
import inforReducer from './inforReducer';
import {combineReducers} from 'redux';
const allReducers = combineReducers({
    dataRe : dataReducer,
    inforRe : inforReducer
})
export default allReducers;