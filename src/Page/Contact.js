import React, { Component } from 'react';
import MainLayout from '../Layout/MainLayout';

class Contact extends Component {
    render() {
        return (
            <MainLayout>

                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>ติดต่อฉันและส่งข้อความ</h1>
                                <p className="lead">ช่องทางโซเชียวมีเดีย และ ฟอร์มติดต่อ</p>
                                <div className="UnderLine"></div>
                            </div>
                            <div className="col-sm-12 my-5 shadow">
                                <div className="row">
                                    <div className="col-md-6 py-5">
                                        <form >
                                            <div id="errormessage"></div>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                        <div className="validation"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                        <div className="validation"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validation"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                        <div className="validation"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6 py-5">
                                        <div className="col-12 ">
                                            <h3 className="text-left">
                                                <p className="lead">ติดต่อผ่านช่องทางโซเชียลมีเดีย
                                          <br />  <span className="UnderLine d-inline-block"></span>

                                                </p>
                                            </h3>
                                        </div>
                                        <div className="lead">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni
                                            ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?
                                    </div>
                                        <div className="lead">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni
                                            ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?
                                    </div>
                                        <div className="lead">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni
                                            ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?
                                    </div>
                                        <div className="lead">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni
                                            ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default Contact
