import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg } from 'reactstrap';
class CardBox extends Component {
    render() {
        return (
            <div className="col-md-4  col-12  mb-5">
                <div className="wrap-card-img my-5" >
                    <div className="shadows">
                        <Card>
                            <NavLink className="wrapper-card-img " to={`/ProductDetail/}`}>
                                <CardImg className="card-img-top text-center" src={this.props.Image} alt="Card image cap" />
                            </NavLink>
                            <CardBody className="text-center text-body">
                                <h3>
                                        {this.props.Headline}
                                </h3 >
                                <div className="UnderLine"></div>
                                <p>
                                    {this.props.TextSend}
                                </p >
                            </CardBody>
                            <div>
                                <button className="my-5 btn btn-primary">
                                    Read More
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
} export default CardBox;