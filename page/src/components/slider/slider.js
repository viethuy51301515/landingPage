import React from 'react';
import {Carousel} from 'antd';
import './slider.scss';
const slide = [
    {
        img:require('../../assets/slide3.jpg')
    },
    {
        img:require('../../assets/slide4.jpg')
    },
    {
        img:require('../../assets/slide5.png')
    }
]
class Slider extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const items = slide.map( (item,index) => (

            <div key={index}>
                <div  className='slide-item' style={{backgroundImage:`url(${item.img})`}}>
                </div>
            </div>
        ))
        return(
            <div id='sliderId'>
                <Carousel autoplay>
                    {items}
                </Carousel>
            </div>
        )
    }
}
export default Slider;