import React from 'react';
import Header from '../header';
import Slider from '../slider';
import Content from '../content'
import Footer from '../footer';
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <Slider />
                <Content/>
                <Footer />
            </div>
        )
    }
}
export default Layout;