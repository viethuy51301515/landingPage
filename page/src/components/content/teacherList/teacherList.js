import React from 'react';
import ItemHeader from '../itemHeader';
import './teacherList.scss'
const Teacher = (props) =>{
    return(
        <div>
            <article className="card card--1">
            <div className="card__img"></div>
            <a href="#" className="card_link">
                <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
                <span className="card__category"> Teacher</span>
                <h3 className="card__title">{props.name}</h3>
                <span className="card__by"><a href="#" className="card__author" title="author">{props.detail}</a></span>
            </div>
            </article>
        </div>
    )
}
class TeacherList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='teacher-list' id='teacher-id'>
                <ItemHeader title='Our Teachers' content='Lorem ipsum dolor sit amet consectetur adipisicing labore et dolore'/>
                <div className='list-teacher'>
                    <Teacher name='Crisp Spanish' detail = 'Ielts 8.0'/>
                    <Teacher name='Crisp Spanish' detail = 'Ielts 8.0'/>
                    <Teacher name='Crisp Spanish' detail = 'Ielts 8.0'/>
                    <Teacher name='Crisp Spanish' detail = 'Ielts 8.0'/>
                </div>
            </div>
        )
    }
}
export default TeacherList;