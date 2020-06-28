import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import Definition from './Definition';

class Display extends Component {
    
    state = {
        phonetic:[],
        meaning:[],
        isLoading:true,
        origin:"",
        error:false
    }
    
    componentDidMount(){
        
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.props.word}`)
        .then(res => res.json())
        .then(resp => {
            console.log(resp);
            resp.map(data =>{
               return this.setState({

                    phonetic:this.state.phonetic.concat(data.phonetic),
                    meaning:this.state.meaning.concat(data.meanings),
                    origin:data.origin,
                    isLoading:false
                })     
            })       
           }   
                )
        .catch(err =>{ 
            console.log(err)
            this.setState({
                error:true
            })})
     }


    render() { 
       
        if(this.state.isLoading){
            return(
                <Loader className="spinner"
                type="Oval"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
        
             />
            )

        }else if(this.state.error){
            return (
            <ul className="list-group">
                <li>Some error occured!!</li>
            </ul>
            )}  
        else{
            return ( 
                <React.Fragment>
                <div className="container">
                    <ul className="list-group"><h5 className="text-info"><strong>Pronunciation</strong></h5>
                  {
                    this.state.phonetic.map(item => 
                      <div key = {item.index}>         
                         <li className="list-group-item">{item}</li>
                      </div>)
                  }
                  </ul>
                  <ul className="list-group">
                  <h5 className="text-info"><strong>Origin</strong></h5>
                  <li className="list-group-item">{this.state.origin}</li>
                  </ul>
           
                  <Definition meaning={this.state.meaning}/>
                </div>
                </React.Fragment>
            );
        }
    }
}
 
export default Display;