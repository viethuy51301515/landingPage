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
    <span>{props.date}</span>
                    </li>
               
                    <li>
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        <span>{props.date}</span>
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
    console.log(data[0].img);
    useEffect(()=>{
        eventRef.once('value',function(snapshot) {
            var list = [];
            snapshot.forEach(function(childSnapShot) {
                var element = childSnapShot.val();
                console.log(childSnapShot.key)
                list.push(<EventItem key={element.key} title={element.title} date={element.date} image={element.image} keys={childSnapShot.key}/> );
            })
            setListEvent(list);
            console.log(list);
        })
    },[]);

    return(
        <div className='event-list'>
            <Header/>
            <SideMenu />
            <ItemHeader img={data[0].img}/>
            <div className='event-item-list'>
                {/* {
                    {
                    listEvent.forEach(element => {
                        <EventItem title={element.title} date={element.date}/> 
                    })
                    }
                } */}
                {/* <EventItem img={data[0].img}/> 
                <EventItem img={data[0].img}/> 
                <EventItem img={data[0].img}/> 
                <EventItem img={data[0].img}/>  */}
                {listEvent}
            </div>
  
        </div>
    )
}
export default EventList;