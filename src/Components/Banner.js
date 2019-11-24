import React, { Component } from 'react';
import Typing from '../Components/Typing';
class Banner extends Component {
    render() {
        let { img, padding, text } = this.props;
        let { styleImageBackground } = {};
        styleImageBackground = {
            backgroundImage: `url(${img})`,
            maxWidth: '100%',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.9,
            padding: `${padding}%`,
            width: '100%',
            height: '100%'
        };

        return (
            <div>
                <div className="container" style={styleImageBackground}>
                    <div className="row">
                        <div className="col-12 text-center text-white">
                            <h1 >
                                {text}
                                <div className="UnderLine"></div>
                            </h1>
                        </div>
                        <div className="col-12 text-center text-white">
                            <Typing
                                heading={"<"}
                                dataText={['My name is ', 'Yoottana Nap', 'I Love coding', "I'm Junior Dev"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner