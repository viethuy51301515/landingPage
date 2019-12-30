import React from 'react';
import './reason.scss';
import {Icon} from 'antd';
const bgImg = require('../../../assets/reason.jpg');
function ReasonItem(props){
    return(
        <div className='reason-item'>
            <Icon type="plus-circle" style={{color:'white'}}/>
            <h2>10 years of experience</h2>
        </div>
    )
}
class Reason extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='reason-layout'>
                <div className='reason-header'>
                    <h1 className='title'>Why Choose Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing labore et dolore magna
                    </p>
                </div>
                <div className='reason-content'>
                    
                    <div className='listItem' style={{backgroundImage:`url(${bgImg})`}}>
                        {/* <div className='overlay'></div> */}
                        <ReasonItem />
                        <ReasonItem />
                        <ReasonItem />
                        <ReasonItem />
                        <ReasonItem />
                    </div>
                </div>
            </div>
        )
    }
}
export default Reason;