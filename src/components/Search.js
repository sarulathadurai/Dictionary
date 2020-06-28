import React from 'react';

const Search = (props) => {
    return ( 
        <React.Fragment>
          
            <nav className="container navbar navbar-light bg-info">
                <h1 className="display-3 text-white text-center">Dictionary</h1>
                <form className="form-inline" onSubmit = {props.handleSubmit}>
                <input className="form-control  mb-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange = {props.handleChange} />
                <button className="btn btn-outline-light btn_align" type="submit"> Search</button>
                </form>
            </nav>
        </React.Fragment>
     );
}
 
export default Search;