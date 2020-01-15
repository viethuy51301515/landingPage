import React from 'react';
import './sylabus.scss';
import {Button } from 'antd';
import ItemHeader from '../itemHeader';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const img = require('../../../assets/sylabus.png')
const ItemSylabus = function(props) {
    const img = require(`../../../assets/sylabus/${props.data.img}`)
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
                    <Button type='primary' className='buttonReadMore' style={{backgroundColor:'#f2552c',border:'none'}}>
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
        console.log(props.data)
    }
    render(){
        var listItem = this.props.data.map( item =>{
            return(
                <ItemSylabus data={item}/>
            )
        });
        return(
            <div className='sylabus-layout' id='course-id'> 
                <ItemHeader title='COURSE CATEGORIES' content='Lorem ipsum dolor sit amet consectetur adipisicing labore et dolore' />
                <div className='sylabus-body'>
                    {listItem}
                </div>
            </div>

        )
    }
}
const Sylabus = connect(mapStateToProps,null)(SylabusTemp);
export default Sylabus;