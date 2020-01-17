import React from 'react';
import {Carousel} from 'antd';
import './slider.scss';
import { connect } from 'react-redux';
import {storeData} from '../../firebase';
import {getListImg} from '../../actions/index'
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
class SliderTemp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listImg:[],
        }
        this.getListImg = this.getListImg.bind(this);
    }
    // componentWillMount(){
    //     this.props.getListImg();
    // }
    componentDidMount(){
        this.getListImg();
    }
    async getListImg(){
        var listRef = storeData.child('slide');
        var data = await new Promise(function(resolve) {
            listRef.listAll().then(function(res){
                resolve(res);
            });
        });
        var list = [];
        for (let i = 0; i < data.items.length; i++) {
            const element = data.items[i];
            var item = await new Promise(function(resolve) {
                element.getDownloadURL().then(function(res) {
                resolve(res);
                
            })
            });
            list.push(item);
        }
        console.log(list);
        this.setState({
            listImg:list
        })
    }
    render(){
        const items = this.state.listImg.map( (item,index) => (

            <div key={index}>
                <div  className='slide-item' style={{backgroundImage:`url(${item})`}}>
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
const mapStateToProps = (state)=>{
    return(
        {
            data:state.slideRe
        }
    )
}
const mapDisptachToProps = (dispatch)=>{
    return(
        {
            getListImg:()=>{
                dispatch(getListImg())
            }
        }
    )
}

const Slider = connect(mapStateToProps,mapDisptachToProps)(SliderTemp);
export default Slider;