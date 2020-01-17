import {storeData} from '../firebase';
var list = [];
async function getData() {
    
    // var listRef = storeData.child('slide');
    // var list = [];
    // // Find all the prefixes and items.
    // listRef.listAll().then(function(res) {
    //   res.items.forEach(function(itemRef) {
    //     itemRef.getDownloadURL().then(function(res) {
    //         list.push(res);
    //     })

    //     // All the items under listRef.
    //   });
    // })
    // return list;
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