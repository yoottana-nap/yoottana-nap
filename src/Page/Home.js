import React from 'react';
import Banner from '../Components/Banner';
import CardBox from '../Components/CardBox';
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Banner padding="15" text="หน้าแรก"
                    img="https://images.unsplash.com/photo-1559336197-ded8aaa244bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
                <div className="App mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>งาน Conferent ที่เข้าร่วม </h1>
                                <div className="UnderLine"></div>
                            </div>
                            <CardBox TextSend={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
                                Headline={"Headline"} Image={"https://uwosh.edu/facilities/wp-content/uploads/sites/105/2018/09/no-photo.png"} />
                            <CardBox TextSend={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
                                Headline={"Headline"} Image={"https://uwosh.edu/facilities/wp-content/uploads/sites/105/2018/09/no-photo.png"} />
                        </div>
                    </div>
                </div >
            </React.Fragment>
        )
    }
} export default Home;