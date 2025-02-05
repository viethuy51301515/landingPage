import marked from 'marked'
import React from 'react';
import Header from '../../header';
import SideMenu from '../../sideMenu';
import {useSelector} from 'react-redux';
import './eventDetail.scss';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState,useEffect} from 'react';
import {faCalendarAlt,faClock} from '@fortawesome/free-solid-svg-icons';
import {eventRef} from '../../../firebase';
marked.setOptions({
    breaks: true,
  });
const ItemHeader = function(props){
    var style ={};
    if(props != null && props.image != null){
        style= {
            backgroundImage:`url(${props.image})`
        }
    }
    return(
        <div className='item-header-detail-layout' style={style}>
        </div>
    )
}
const EventItem = (props)=>{

    return(
        <Link to={`/eventDetail/${props.keys}`} className='eventItem' onClick={props.changeUrl}>
        {/* <a className='eventItem'> */}
    <h2>{props.title}</h2>
            <div className='info'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                        <span>{props.date.split(" ")[0]}</span>
                    </li>
               
                    <li>
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        <span>{props.date.split(" ")[1]}</span>
                    </li>
                   
                </ul>
            </div>
        {/* </a> */}
        </Link>
    )
}
const EventDetail = (props)=>{
    const test = `Giáo dục trực tuyến là giải pháp tối ưu cho học sinh đối phó dịch bệnh?
========================
[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-

1. Type in stuff on the left.
2.See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.
![](https://goo.gl/Umyytc)

Why Markdown?
-------------

_It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [123](https://www.freecodecamp.com) says,_

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
![](https://goo.gl/Umyytc)
    `;
    const [data,setData] = useState({});
    const [content,setContent] = useState();
    const [items,setListItems] = useState();
    const [reload,setReload] = useState(false);
    const changeUrl = ()=>{
        setReload(!reload);
        console.log("12321")
    }
    useEffect(()=>{
        eventRef.child(props.match.params.id).once('value').then(snapshot =>{
            var item = snapshot.val();
            setData(item);
            setContent(`${item.date}`+marked(item.content.split("\\n").join('\n')));
           
            return item;
        }).then(item =>{
            console.log(item)
            eventRef.orderByChild("type").equalTo(item.type).limitToLast(4).once('value').then(snapshot =>{
                let list = [];
                snapshot.forEach(sp => {
                    console.log(sp.val());
                    list.push( <EventItem date={sp.val().date} title={sp.val().title} keys={sp.key} changeUrl={changeUrl}/>)
                    
                });
                setListItems(list);
            })
        })
        // eventRef.equalTo("").once('value').then(snapshot =>{
        //     snapshot.forEach(sp => {
                
        //     });
        // })
    },[reload]);
    return(
        <div >
            <Header child="true"/>
            <SideMenu />
            <ItemHeader image={data.image}/>
            <div className='event-content'>

                <div className='event' dangerouslySetInnerHTML={{__html:content}}>

                </div>
                <div className='related'>
                    <h2>Tin khác</h2>
                    {items}
                </div>
            </div>

        </div>
    )
}
export default EventDetail;