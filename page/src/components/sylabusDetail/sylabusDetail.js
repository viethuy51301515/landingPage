import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './sylabusDetail.scss';
import SideMenu from '../sideMenu'
const image = require('../../assets/detail.jpg');
const imageHeader = require('../../assets/slide3.jpg');
const lt = require('../../assets/lotrinh.png');
const fee = require('../../assets/fee.png');
const Item = function(props) {
    var style = {
        flexDirection: 'row',
    }
    if(props.index % 2 == 0 ){
         style.flexDirection = 'row-reverse';
    }

    return(
        <div className='sylabus-detail-item'  style={style}>
            <img src={image} alt=""/>
            <div className='detail-content'>
                <h2>
                    Mục Tiêu
                </h2>
                <p>
                Tại chương trình học tiếng anh trẻ em YOLA DOLPHIN, 
                học sinh được hòa mình vào môi trường tiếng Anh tự nhiên để khuyến khích niềm yêu thích học tập, 
                xây dựng sự tự tin khi sử dụng tiếng Anh, đồng thời hướng đến việc giúp cho bé nuôi dưỡng những
                 năng lực cần thiết để có thể phát triển tốt nhất cho cuộc sống hiện tại và tương lai.
                </p>
            </div>
        </div>
    )
}
const ItemHeader = function(){
    return(
        <div className='item-header-detail-layout' style={{backgroundImage:`url(${imageHeader})`}}>
            <h1>Tiếng Anh Trẻ Em</h1>
            <h3>HỌC TIẾNG ANH CHO BÉ 4,5 tuổi – 6 tuổi
Tư duy Tiếng Anh tự nhiên như trẻ em bản xứ</h3>
        </div>
    )
}
class SylabusDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var listItem = [];
        for (let i = 1; i < 5; i++) {
            listItem.push(
                <Item index={i} ></Item>
            )
            
        }

        return(
            <div>
                <Header/>
                <SideMenu />
                <ItemHeader />
                <div className='lt-layout'>
                    <h2>Lộ Trình Học Tập</h2>
                    <div>
                        <img src={lt} alt=""/>
                    </div>
                </div>
                {listItem}
                <div className='fee-layout'>
                    <h2>Học Phí</h2>
                    <div>
                        <img src={fee} alt=""/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default SylabusDetail;