import React, { Component } from 'react';
import './AddFolderButton.css';

class AddFolderButton extends Component{
    render(){
        return(
            <div className="addFolderButtonHolder">
                <button>+Folder</button>
            </div>
        );
    }
}

export default AddFolderButton;