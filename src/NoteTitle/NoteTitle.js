import React, { Component } from 'react';
import './NoteTitle.css';

class NoteTitle extends Component{
    render(){
        return(
            <div className="noteTitleContainer">
                <h3>{this.props.noteTitleData}</h3>
            </div>
        );
    }
}

export default NoteTitle;