import dataReducer from './dataReducer';
import inforReducer from './inforReducer';
import {combineReducers} from 'redux';
import { whyusReducer } from './whyusReducer';
import {sliderReducer} from './sliderReducer';
const allReducers = combineReducers({
    dataRe : dataReducer,
    inforRe : inforReducer,
    whyusRe: whyusReducer,
    slideRe: sliderReducer
})
export default allReducers;