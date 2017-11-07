import React from 'react';

class TextBox extends React.Component {
    constructor() {
        super();
        this.state = {
            typed: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

        // events     
    onChangeHandler(event) {
            this.setState({typed: event.target.value});
    };

    onKeyPress(event) {
        //debugger
        let mykey = event.key;
        //this.setState({typed: mykey});
        console.log(mykey)
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.typed} onKeyPress={this.onKeyPress} onChange={this.onChangeHandler}/>
            </div>
        );
    }
};

export default TextBox;