import React from 'react';
import ItemHeader from '../itemHeader';
import './teacherList.scss'
const Teacher = (props) =>{
    return(
        <div>
            <article class="card card--1">
            <div class="card__img"></div>
            <a href="#" class="card_link">
                <div class="card__img--hover"></div>
            </a>
            <div class="card__info">
                <span class="card__category"> Teacher</span>
                <h3 class="card__title">{props.name}</h3>
                <span class="card__by"><a href="#" class="card__author" title="author">{props.detail}</a></span>
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
            <div className='teacher-list'>
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