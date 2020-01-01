import React from 'react';
import './itemHeader.scss';
const ItemHeader = function(props) {
    return(
        <div className='reason-header'>
            <h1 className='title'>{props.title}</h1>
            <p>
                {props.content}
            </p>
        </div>
    )
}
export default ItemHeader;