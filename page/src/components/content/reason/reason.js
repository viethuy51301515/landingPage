import React from 'react';
import './reason.scss';
import {Icon} from 'antd';
import ItemHeader from '../itemHeader'
import { connect } from 'react-redux';
const bgImg = require('../../../assets/reason.jpg');
const imgDes = require("../../../assets/reason2.jpg")
function ReasonItem(props){
    const content = props.content.split('<br/>').map(item =>{
        return (
            <p>{item}</p>
        )
    })
    return(
        <div className='reason-item'>
            
            <Icon key={props.index}  type="eye"  style={{color:'white',fontSize: '50px'}} className='moreIcon'/>
            <h2>{props.title}</h2>
            <div className='reason-item-content'>
                <h3 className='content-header'>{props.title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}
class ReasonTemp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const listReason = this.props.data.map( (item,index) =>{
            return(
                <ReasonItem title={item.title} content={item.content} key={index}/>
            )
        })
        return(
            <div className='reason-layout' id='about-us'>
                <ItemHeader title='Tại Sao Là Chúng Tôi' content='Những Điều Khiến Bạn Chọn Chúng Tôi' />
                <div className='reason-content'>
                    
                    <div className='listItem' style={{backgroundImage:`url(${bgImg})`}}>
                        <div className='overlay'></div>
                        {listReason}
                    </div>
                    <div className='reason-description'>
                        <div>
                            <h2 className='sub-reason'>
                                CHÚNG TÔI KHÁC BIỆT
                            </h2>
                            <p>
                            Với quan điểm lấy học viên làm trung tâm, tôn trọng tính riêng biệt. 
                            Sứ mệnh của SLC tạo động lực, khơi dậy niềm đam mê và xây dựng những bậc thang vững chắc 
                            nhất trên con đường trinh phục khát vọng tương lai.<br/>
                            Skyscraper là nhà: nơi tràn ngập tiếng cười, sự yêu thương và ấm áp. <br/>
                            Skyscraper nâng niu những bước đi đầu tiên trên hành trình chinh phục đỉnh cao tri thức.<br/>
                            Skyscraper nơi đam mê được đánh thức, khát vọng được bay cao.<br/>
                            Skyscraper nơi học viên tự tin vững bước trong thế kỷ 21, thời đại 4.0<br/>


                            </p>
                        </div>
                        <img src={imgDes} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return({
        data:state.whyusRe
    })
}
const Reason = connect(mapStateToProps,null)(ReasonTemp);
export default Reason;