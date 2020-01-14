const inforReducer = (state=0,action) => {
    switch (action.type) {
        case "addInfor":
            state++;
            break;
    
        default:
            break;
    }
}
export default inforReducer;