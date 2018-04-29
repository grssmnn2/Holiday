import React, {Component} from 'react';
//refactor using recompose and HOC ?
//  input is address, output is lat lng 
//  which is then put into an array 
//  mapped over and markers appended to the screen 

//  require map here
//  pass address to map as prop?

// const SearchBox = props => (
//     <div className= "search-Box">
//         <input
//             type="text"
//             placeholder="Map your apartments!"
//         />

//     </div>

// )


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.log('Address was submitted:' + this.state.value)
        event.preventDefault();
    }
        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                <label>
                    Search for apratment swaps:
                    <input type="text" value={this.state.value} onChange={this.handleChange}
                    />
                    </label>
                    <input type='submit' value='Submit' />
                </form>
            );
        }
    }



export default SearchBox;