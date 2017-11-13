import React from "react";

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            typed: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({typed: event.target.value});
    };

    onClickHandler(event) {
        this.setState({ typed: '' });
    }

    render() {
        return (
            <div className='search-container'>
                <input className='search' autoFocus type='text' value={this.state.typed} onChange={this.onChangeHandler} placeholder="Search For Items"/>
                <button className='button' onClick={this.onClickHandler}>X</button>
                
            </div>
        );
    }
}

export default Search;