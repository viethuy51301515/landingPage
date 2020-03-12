import React from 'react';
import ItemHeader from '../itemHeader';
import './teacherList.scss';
import {teacherRef,teacherStore} from '../../../firebase';
const img = require("../../../assets/teacher/teacher.jpg")
const Teacher = (props) =>{
    return(
        <div>
            <article className="card card--1">
            <div className="card__img"></div>
            <a href="#" className="card_link">
                <div className="card__img--hover" style={{backgroundImage:`url(${props.image})`}} ></div>
            </a>
            <div className="card__info">
    <span className="card__category"> {props.pos}</span>
                <h3 className="card__title">{props.name}</h3>
                <span className="card__by"><a href="#" className="card__author" title="author">{props.des}</a></span>
            </div>
            </article>
        </div>
    )
}
class TeacherList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listTeacher:[]
        }
        this.getListImg = this.getListImg.bind(this);
    }
    async getListImg(listI){
        var listRef = teacherStore;
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
            list.push({
  
              image:item,
              id:element.name
            }
              );
        }
        var listTemp = [...listI];
        listTemp.map(item =>  {
          var subItem = list.filter(sub => sub.id == item.id);
          if(subItem.length > 0){
            item.image = subItem[0].image;
          }
          return item;
        })
        this.setState({
            listTeacher:listTemp});
        
      }
      async componentDidMount(){
        var list = [];
        await teacherRef.orderByChild('name').once('value',function(snapshot) {
      
            snapshot.forEach( function(childSnapShot) {
                var element = childSnapShot.val();
                var item = {
                  name:element.name ,
                  pos:element.pos ,
                  des: element.des,
                  id:element.id,
                  image:element.image,
                  key:childSnapShot.key
              } 
              list.push(item);
                
            })
        });
        this.getListImg(list);
        console.log(list);
      }    
      render(){
        const listT = [];
        this.state.listTeacher.forEach(element => {
            listT.push(<Teacher name={element.name} des ={element.des} image={element.image} pos={element.pos} />)
        });
        return(
            <div className='teacher-list' id='teacher-id'>
                <ItemHeader title='Our Teachers' content='Lorem ipsum dolor sit amet consectetur adipisicing labore et dolore'/>
                <div className='list-teacher'>
                    {listT}
                </div>
            </div>
        )
    }
}
export default TeacherList;