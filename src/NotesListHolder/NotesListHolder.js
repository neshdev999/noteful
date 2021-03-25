import React, { Component } from 'react';
import './NotesListHolder.css';
import NotesList from '../NotesList/NotesList';
import AddNoteButton from '../AddNoteButton/AddNoteButton';

class NotesListHolder extends Component{
    render(){
        return(
            <div className="notesListHolderContainer">
                <div className="notesListHolderItem">
                    <NotesList noteData= {this.props.noteData}/>
                </div>
                <div className="notesListHolderItem">
                    <AddNoteButton />
                </div>
            </div>

        )
    }
}

export default NotesListHolder;