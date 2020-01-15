import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {connect} from 'react-redux';
import './sylabusDetail.scss';
import SideMenu from '../sideMenu'



const Item = function(props) {
    var style = {
        flexDirection: 'row',
    }
    if(props.index % 2 == 0 ){
         style.flexDirection = 'row-reverse';
    }
    const image = require(`../../assets/sylabus/${props.data.img}`);
    return(
        <div className='sylabus-detail-item'  style={style}>
            <img src={image} alt=""/>
            <div className='detail-content'>
                <h2>
                    {props.data.header}
                </h2>
                <p>
                    {props.data.info}
                </p>
            </div>
        </div>
    )
}
const ItemHeader = function(props){
    const imageHeader = require(`../../assets/sylabus/${props.img}`);
    return(
        <div className='item-header-detail-layout' style={{backgroundImage:`url(${imageHeader})`}}>
        </div>
    )
}
class SylabusDetailTemp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        const selectedData = this.props.data.find(item => item.id == this.props.match.params.id);
        const lt = require(`../../assets/sylabus/${selectedData.time}`);
        const fee = require(`../../assets/sylabus/${selectedData.fee}`);
        console.log(selectedData.content);
        var listItem = selectedData.content.map( (item,index) =>{
            return <Item index={index} data={item}></Item>
        })
        console.log(listItem)
        // for (let i = 1; i < 5; i++) {
        //     listItem.push(
        //         <Item index={i} ></Item>
        //     )
            
        // }

        return(
            <div>
                <Header/>
                <SideMenu />
                <ItemHeader img={selectedData.img}/>
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
const mapStateToProps = (state) =>{
    return {data:state.dataRe};
}
const SylabusDetail = connect(mapStateToProps,null)(SylabusDetailTemp);
export default SylabusDetail;