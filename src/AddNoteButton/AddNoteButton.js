import React, { Component } from 'react';
import './AddNoteButton.css';

class AddNoteButton extends Component{
    render(){
        return(
            <div className="addNoteButtonHolder">
                <button>+Note</button>
            </div>

        )
    }
}

export default AddNoteButton;