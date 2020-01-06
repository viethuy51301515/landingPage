import Reason from './reason';
import React from 'react';
import Sylabus from './sylabus';
import TeacherList from './teacherList';
import Register from './register'
function Content(){
    return(
        <div>
            <Reason />
            <Sylabus/>
            <Register />
            <TeacherList />
        </div>
    )
}
export default Content;