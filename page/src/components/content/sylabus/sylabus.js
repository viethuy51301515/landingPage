import React from 'react';
import './sylabus.scss';
import {Button } from 'antd';
import ItemHeader from '../itemHeader';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {TimelineLite,TweenMax,TimelineMax,Elastic,Back} from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import {useEffect} from 'react';
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const img = require('../../../assets/sylabus.png')
var ctrl = new ScrollMagic.Controller();
const ItemSylabus = function(props) {
    const img = require(`../../../assets/sylabus/${props.data.img}`)
    // useEffect(() =>{
    //     var tl = new TimelineMax();
    //     // tl.staggerFrom(".card-sylabus", 1.5, {
    //     //     scale: 0,
    //     //     cycle: {
    //     //         y: [-50, 50]
    //     //     },
    //     //     // ease: Elastic.easeOut,
    //     //     stagger: {
    //     //         from: "center",
    //     //         amount: 0.25
    //     //     }
    //     //   });
    //       tl.from(".card-sylabus", 0.65, { yPercent: 100, ease: Back.easeOut });
    //       var scene = new ScrollMagic.Scene({
    //         triggerElement: ".sylabus-layout",
    //         triggerHook: 0.15
    //       })
    //       .addIndicators({
    //         colorTrigger: "white",
    //   colorStart: "white",
    //   colorEnd: "white",
    //   indent: 40
    //       })
    //       .setTween(tl)
    //       .addTo(ctrl);
    // },[]);
    return(
        <div className='card-sylabus'>
            <img src={img}/>
            <div className='card-content'>
                <h2>
                    {props.data.title}
                </h2>
                <p>
                    {props.data.subTitle}
                </p>
                <Link to={`detail/${props.data.id}`}>
                    <Button type='primary' className='buttonReadMore' style={{backgroundColor:'#b31c25',border:'none'}}>
                        Read More
                    </Button>
                </Link>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {data:state.dataRe}
}
class SylabusTemp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var listItem = this.props.data.map( item =>{
            return(
                <ItemSylabus data={item}/>
            )
        });
        return(
            <div className='sylabus-layout' id='course-id'> 
                <ItemHeader title='KHÓA HỌC' content='SLC CUNG CẤP ĐA DẠNG KHÓA HỌC CHO MỌI LỨA TUỔI' />
                <div className='sylabus-body' id='sylabus-body'>
                    {listItem}
                </div>
            </div>

        )
    }
}
const Sylabus = connect(mapStateToProps,null)(SylabusTemp);
export default Sylabus;