import React from 'react';
import Header from '../header';
import SideMenu from '../sideMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt,faClock} from '@fortawesome/free-solid-svg-icons'
import './event.scss'
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {eventRef} from '../../firebase';
import {useEffect,useState} from 'react'
import {Tabs} from 'antd';
const {TabPane} = Tabs;
const ItemHeader = function(props){
    const imageHeader = require(`../../assets/sylabus/${props.img}`);
    return(
        <div className='item-header-detail-layout' style={{backgroundImage:`url(${imageHeader})`}}>
        </div>
    )
}
const EventItem = (props)=>{
    
    return(
        <Link to={`/eventDetail/${props.keys}`} className='eventItem'>
        {/* <a className='eventItem'> */}
    <h2>{props.title}</h2>
            <div className='info'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                        <span>{props.date.split(" ")[0]}</span>
                    </li>
               
                    <li>
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        <span>{props.date.split(" ")[1]}</span>
                    </li>
                    <li>
                        <span>{props.type == 'sk' ? "Sự Kiện" : "Tin Tức"}</span>
                    </li>
                </ul>
            </div>
            <div className='img-div'>
                <img src={props.image} alt=""/>
            </div>
        {/* </a> */}
        </Link>
    )
}
function EventList(props){
    const data = useSelector(state => state.dataRe);
    const [listEvent,setListEvent] = useState([]);
    const [listNews,setListNews] = useState([]);
    const [listAll,setListAll] = useState([]);
    console.log(data[0].img);
    useEffect(()=>{
        eventRef.once('value',function(snapshot) {
            var listAll = [];
            var listEvent = [];
            var listNews = [];
            snapshot.forEach(function(childSnapShot) {
                var element = childSnapShot.val();
                console.log(childSnapShot.key)
                listAll.push(<EventItem key={element.key} title={element.title} date={element.date} image={element.image} keys={childSnapShot.key} type={element.type}/> );
                if(element.type == 'tt'){
                    listNews.push(<EventItem key={element.key} title={element.title} date={element.date} image={element.image} keys={childSnapShot.key} type={element.type}/> );
                }
                if(element.type == 'sk'){
                    listEvent.push(<EventItem key={element.key} title={element.title} date={element.date} image={element.image} keys={childSnapShot.key} type={element.type}/> );
                }
            })
            setListEvent(listEvent);
            setListNews(listNews);
            setListAll(listAll);
        })
    },[]);

    return(
        <div className='event-list'>
            <Header child="true"/>
            <SideMenu />
            <ItemHeader img={data[0].img}/>
 
            <div style={{width:"90%",margin:"auto"}}>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tất Cả" key="1">
                    <div className='event-item-list'>
                        {listAll}
                    </div>
                    </TabPane>
                    <TabPane tab="Tin Tức" key="2">
                    <div className='event-item-list'>
                        {listNews}
                    </div>
                    </TabPane>
                    <TabPane tab="Sự Kiện" key="3">
                    <div className='event-item-list'>
                        {listEvent}
                    </div>
                    </TabPane>
                </Tabs>,
                 
                </div>
  
        </div>
    )
}
export default EventList;