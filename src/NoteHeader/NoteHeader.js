import React, { Component } from 'react';
import './NoteHeader.css';
import { Link } from 'react-router-dom';

class NoteHeader extends Component{
    render(){
        return(
            <div className="mainHeaderContainer">
                <Link to ='/' className="currentHeaderLink"><h1 className="mainHeaderContent">Noteful</h1></Link>
            </div>      
        );
    }
}

export default NoteHeader;