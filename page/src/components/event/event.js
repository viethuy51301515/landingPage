import React from 'react';
import Header from '../header';
import SideMenu from '../sideMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt,faClock} from '@fortawesome/free-solid-svg-icons'
import './event.scss'
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
const ItemHeader = function(props){
    const imageHeader = require(`../../assets/sylabus/${props.img}`);
    return(
        <div className='item-header-detail-layout' style={{backgroundImage:`url(${imageHeader})`}}>
        </div>
    )
}
const EventItem = (props)=>{
    const imageHeader = require(`../../assets/sylabus/${props.img}`);
    return(
        <Link to={'/eventDetail/123'}>
        <a className='eventItem'>
            <h2>GIÁO DỤC TRỰC TUYẾN LÀ GIẢI PHÁP TỐI ƯU CHO HỌC SINH ĐỐI PHÓ DỊCH BỆNH?</h2>
            <div className='info'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                        <span>20/10/2020</span>
                    </li>
               
                    <li>
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        <span>11:10</span>
                    </li>
                   
                </ul>
            </div>
            <div className='img-div'>
                <img src={imageHeader} alt=""/>
            </div>
        </a>
        </Link>
    )
}
function EventList(props){
    const data = useSelector(state => state.dataRe);
    console.log(data[0].img);
    return(
        <div className='event-list'>
            <Header/>
            <SideMenu />
            <ItemHeader img={data[0].img}/>
            <div className='event-item-list'>
                <EventItem img={data[0].img}/> 
                <EventItem img={data[0].img}/> 
                <EventItem img={data[0].img}/> 
                <EventItem img={data[0].img}/> 
            </div>
  
        </div>
    )
}
export default EventList;