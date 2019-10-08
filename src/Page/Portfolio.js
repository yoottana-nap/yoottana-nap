import React, { Component } from 'react'
import CardBox from '../Components/CardBox';

class Portfolio extends Component {
    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="col-12 my-5">
                        <h1>ผลงานที่เคยทำ</h1>
                        <p className="lead">งานต่างๆ ที่ผ่านมาที่เกี่ยวกับการเขียนโปรแกรม</p>
                        <div className="UnderLine"></div>
                    </div>
                    <CardBox TextSend={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} 
                    Headline={"Game Development"} Image={"https://uwosh.edu/facilities/wp-content/uploads/sites/105/2018/09/no-photo.png"}/>
                    <CardBox TextSend={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} 
                    Headline={"Web Programming"} Image={"https://uwosh.edu/facilities/wp-content/uploads/sites/105/2018/09/no-photo.png"}/>
                    <CardBox TextSend={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} 
                    Headline={"Headline"} Image={"https://uwosh.edu/facilities/wp-content/uploads/sites/105/2018/09/no-photo.png"}/>
                    <CardBox TextSend={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} 
                    Headline={"Headline"} Image={"https://uwosh.edu/facilities/wp-content/uploads/sites/105/2018/09/no-photo.png"}/>
                </div>

            </div>
        )
    }
}

export default Portfolio
