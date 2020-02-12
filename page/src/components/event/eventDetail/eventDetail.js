import marked from 'marked'
import React from 'react'
const EventDetail = ()=>{
    const test = '# hello'
    return(
        <div dangerouslySetInnerHTML={{__html:marked(test)}}>
             
        </div>
    )
}
export default EventDetail;