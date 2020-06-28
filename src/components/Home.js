import React, { Component } from 'react';
import Search from './Search';
import Display from './Display';

class Home extends Component {
    state = { 
        word:'',
        isWord:false ,
     }

     handleChange = (e) => {
    
        this.setState({
            isWord: false,
            word : e.target.value
        })
     }

     handleSubmit = (e) => {
         e.preventDefault();
         this.setState({
             isWord:true
         })
     }

    render() {
        const display = this.state.isWord === true ? <Display word = {this.state.word} /> : null; 
        return (
            <React.Fragment>
                <Search handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} word = {this.state.word} />
                {display}
            </React.Fragment>
          );
    }
}
 
export default Home;