import React from 'react';
import './reason.scss'
const bgImg = require('../../../assets/reason.jpg')
class Reason extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='reason-layout'>
                <div className='reason-header' style={{backgroundImage:`url(${bgImg})`}}>
                    <div className='reason-content'>
                        <h1>
                            <small>Vi sao </small>
                            chon chung toi
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reason;