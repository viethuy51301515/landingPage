import {todosRef} from '../firebase';
const inforReducer = (state={},action) => {
    switch (action.type) {
        case "addInfor":
            state =  action.data;
            todosRef.push().set(action.data);
            break;
    
        default:
            break;
    }
    return state;
}
export default inforReducer;