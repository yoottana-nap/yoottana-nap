import React, { Component } from 'react'

 class ProfileComponent extends Component {
    render() {
        return (
            <div className="col-12">
            <div className="shadow p-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-6 col-md-5">
                                <div className="about-img">
                                    <img src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/60947244_2287962721262801_2512458608625582080_o.jpg?_nc_cat=101&_nc_eui2=AeEljio61AqL3ekWQJHPdhpFa4Uqk597F29LlOpSPQkgo4dh5l2tbdfebSgGpSxWVHcbF1X4db4RpB6f-EXpbq1ykA4p2hvE0jfrXa-S4LAjUQ&_nc_oc=AQmn_SRdDG8boxRNpQMWTebbva3H8AhVgTFpMc52kEGIzGe1GQqncXQVxj_X6rumG3mp8aHb3hinVPjOsEbPIXyg&_nc_ht=scontent.fbkk12-1.fna&oh=d66869e22fca1d960eb16cf00cbb0d04&oe=5E3058EC" className="img-fluid w-100 img-responsive rounded b-shadow-a" alt="" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-7">
                                <div className="about-info">
                                    <p><span className="title-s">Name: </span> <span>Morgan Freeman</span></p>
                                    <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                                    <p><span className="title-s">Email: </span> <span>contact@example.com</span></p>
                                    <p><span className="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="title-s">Skill</p>
                            <span>HTML</span> <span className="pull-right">85%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>CSS3</span> <span className="pull-right">75%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>PHP</span> <span className="pull-right">50%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="about-me pt-4 pt-md-0">
                            <div className="title-box-2">
                                <h5 className="title-left">
                                    About me
                                </h5>
                            </div>
                            <p className="lead">
                                Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                imperdiet et, porttitor
                                at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                porttitor accumsan 
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ProfileComponent
