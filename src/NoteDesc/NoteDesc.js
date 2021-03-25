import React, { Component } from 'react';
import './NoteDesc.css';

class NoteDesc extends Component{
    render(){
        return(
            <div className="noteDescContainer">
                {this.props.noteDescData}
            </div>
        );
    }
}

export default NoteDesc;