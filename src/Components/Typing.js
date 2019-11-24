import React, { Component } from 'react'

class Typing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 1000,

        }
    }
    componentDidMount() {
        this.handleType();
    }


    handleType = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        //loop idx word 
        const idx = loopNum % dataText.length;
        const fullText = dataText[idx];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? 30 : 150
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true }), 500);
        } 
        else if (isDeleting && text === '') {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });
        }        
        setTimeout(this.handleType, typingSpeed);
    };
    render() {
        return (
            <div>
                <h5>
                {this.props.heading}
                <span className="text-warning">{this.state.text}<span className="bg-danger text-danger"></span></span ><span>/></span>
                </h5>
            </div>
        )
    }
}

export default Typing
