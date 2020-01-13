import React from 'react';
import './sylabus.scss';
import {Button } from 'antd';
import ItemHeader from '../itemHeader';
import {Link} from 'react-router-dom';
const img = require('../../../assets/sylabus.png')
const ItemSylabus = function(props) {
    return(
        <div className='card-sylabus'>
            <img src={img}/>
            <div className='card-content'>
                <h2>
                    Programing
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consect etrttur ading labo
                </p>
                <Link to={'detail/123'}>
                    <Button type='primary' className='buttonReadMore' style={{backgroundColor:'#f2552c',border:'none'}}>
                        Read More
                    </Button>
                </Link>
            </div>
        </div>
    )
}
class Sylabus extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='sylabus-layout' id='course-id'> 
                <ItemHeader title='COURSE CATEGORIES' content='Lorem ipsum dolor sit amet consectetur adipisicing labore et dolore' />
                <div className='sylabus-body'>
                    <ItemSylabus/>
                    <ItemSylabus/>
                    <ItemSylabus/>
                    <ItemSylabus/>
                    <ItemSylabus/>
                </div>
            </div>

        )
    }
}
export default Sylabus;