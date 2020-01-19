import {storeData} from '../firebase';
var list = [];
async function getData() {
    return ['123']
}

export const sliderReducer = (state = [],action)=>{
    switch (action.type) {
        case "getSlideData":
            getData().then(function(res) {
                state = res;
            })
            // console.log("1231ffff2321"+state);
            return state;
        default:
            break;

    }
    return state;
}