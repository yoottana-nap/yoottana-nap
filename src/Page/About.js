import React from 'react';
import ProfileComponent from '../Components/ProfileComponent';
import Timeline from '../Components/Timeline';
class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-5">
                                <h1>เกี่ยวกับฉัน</h1>
                                <div className="UnderLine"></div>
                            </div>
                            <ProfileComponent />
                            <Timeline />
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
} export default About;


