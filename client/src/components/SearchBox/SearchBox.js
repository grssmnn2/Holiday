import React, {Component} from 'react';
// import MyMapComponent from './Map/MyMapComponent';
//refactor using recompose and HOC ?
//  input is address, output is lat lng 
//  which is then put into an array 
//  mapped over and markers appended to the screen 

//  require map here
//  pass address to map as prop? - this.handleUserInput

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userInput: ''};
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.setState({userInput: e.target.value})
    }

   
        render() {
            return (
                <div>
                    <input type="text" onChange={this.handleUserInput}
                    value={this.state.userInput} placeholder="enter address here" />
                    <h1>{this.state.userInput} </h1>
                </div>
            );
        }
    }



export default SearchBox;