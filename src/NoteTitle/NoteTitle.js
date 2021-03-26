import React, { Component } from 'react';
import './NoteTitle.css';
import { Link } from 'react-router-dom';

class NoteTitle extends Component{
    render(){
        const currentNoteId = this.props.noteData.id;
        return(
            <div className="noteTitleContainer">
                <h3>
                    <Link to={`/note/${currentNoteId}`}>
                        {this.props.noteTitleData}
                    </Link>
                </h3>
            </div>
        );
    }
}

export default NoteTitle;