import React from 'react';
import './reason.scss';
import {Icon} from 'antd';
import ItemHeader from '../itemHeader'
const bgImg = require('../../../assets/reason.jpg');
const imgDes = require("../../../assets/reason2.jpg")
function ReasonItem(props){
    return(
        <div className='reason-item'>
            
            <Icon type="plus-circle" style={{color:'white',fontSize: '50px'}} className='moreIcon'/>
            <h2>Doi ngu giao vien dat trinh do quoc te</h2>
            <div className='reason-item-content'>
                <h3 className='content-header'>Doi ngu giao vien dat trinh do quoc te</h3>
                <p>Là một trong số ít tổ chức kết hợp giữa các giáo viên nước ngoài và Việt Nam tốt nghiệp từ các trường đại học lớn của thế giới giúp tối ưu hóa phương pháp dạy & học và truyền lửa cho học sinh</p>
            </div>
        </div>
    )
}
class Reason extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='reason-layout' id='about-us'>
                {/* <div className='reason-header'>
                    <h1 className='title'>Why Choose Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing labore et dolore magna
                    </p>
                </div> */}
                <ItemHeader title='Why Choose Us' content='Lorem ipsum dolor sit amet consectetur adipisicing labore et dolore magna' />
                <div className='reason-content'>
                    
                    <div className='listItem' style={{backgroundImage:`url(${bgImg})`}}>
                        <div className='overlay'></div>
                        <ReasonItem />
                        <ReasonItem />
                        <ReasonItem />
                        <ReasonItem />
                        <ReasonItem />
                    </div>
                    <div className='reason-description'>
                        <div>
                            <h2>
                                KHAI PHÓNG
                                SỨC MẠNH TIỀM NĂNG
                            </h2>
                            <p>
                            YOLA luôn được biết đến là tổ chức giáo dục uy tín 
                            đem lại sự cải thiện rõ rệt trong kĩ năng học thuật 
                            và điểm số từ các bài thi quốc tế của học viên. 
                            Những tiến bộ vượt trội của hơn 30,000 học viên YOLA 
                            đã đào tạo và hàng loạt điểm thi cao hàng đầu Việt Nam 
                            IELTS 8.5/9.0, TOEFL 119/120, SAT 1570/1600 cũng như tổng 
                            giá trị học bổng hơn 220 tỷ đồng từ top 100 các trường 
                            đại học hàng đầu thế giới dành riêng cấp cho học sinh của 
                            YOLA chính là minh chứng cho độ hiệu quả của lộ trình 
                            học thuật mà YOLA tâm huyết.
                            </p>
                        </div>
                        <img src={imgDes} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reason;