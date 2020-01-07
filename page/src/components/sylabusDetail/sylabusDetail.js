import React from 'react';
import Header from '../header';
import Footer from '../footer';

const Item = function(props) {
    return(
        <div>
            <img src="#" alt=""/>
            <div className='detail-content'>
                <h3>
                    Header
                </h3>
                <p>
                    dsaldklsdlaskdlkasl
                </p>
            </div>
        </div>
    )
}
class SylabusDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.match)
        return(
            <div>
                <Header/>
                    <Item/>
                <Footer />
            </div>
        )
    }
}
export default SylabusDetail;