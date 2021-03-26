import React, { Component } from 'react';
import './Note.css';

import NoteTitle from '../NoteTitle/NoteTitle';
import NoteDesc from '../NoteDesc/NoteDesc';
import DelNote from '../DelNote/DelNote';

class Note extends Component{
    
    render(){
        const currentNoteContent = this.props.noteContent;
        return(
            <div className="noteContainer">
                <div>
                    <NoteTitle noteData={currentNoteContent} noteTitleData={currentNoteContent.name}/>
                </div>
                <div className="downNoteItemContainer">
                    <div className="downNoteItem">
                        <NoteDesc noteDescData={currentNoteContent.modified}/>
                    </div>
                    <div className="downNoteItem">
                        <DelNote />
                    </div>
                </div>
            </div>
        )
    }
}

export default Note;