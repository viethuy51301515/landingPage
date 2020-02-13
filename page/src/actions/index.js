export const addData = (message) =>{
    return {
        type:"addInfor",
        data:message
    }
}
export const getListImg = ()=>{
    return{
        type:"getSlideData"
    }
}
export const getListEvent = ()=>{
    return{
        type:"getListEvent"
    }
}