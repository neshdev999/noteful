import React, { Component } from 'react';
import './NotesList.css';
import Note from '../Note/Note';

class NotesList extends Component{
    render(){
        const currentData = this.props.noteData;
        return(
            currentData.map((note, index) =>
            <div key={index} className="singleNote"><Note noteContent={note}/></div>
            )
        );
    }
}

export default NotesList;