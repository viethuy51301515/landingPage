import dataReducer from './dataReducer';
import inforReducer from './inforReducer';
import {combineReducers} from 'redux';
import { whyusReducer } from './whyusReducer';
const allReducers = combineReducers({
    dataRe : dataReducer,
    inforRe : inforReducer,
    whyusRe: whyusReducer
})
export default allReducers;