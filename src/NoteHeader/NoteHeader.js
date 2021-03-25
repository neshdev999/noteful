import React, { Component } from 'react';
import './NoteHeader.css';

class NoteHeader extends Component{
    render(){
        return(
            <div className="mainHeaderContainer">
                <h1 className="mainHeaderContent">Noteful</h1>
            </div>      
        );
    }
}

export default NoteHeader;