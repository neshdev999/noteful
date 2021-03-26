import React, { Component } from 'react';
import './FolderList.css';
import { Link } from 'react-router-dom';
import '../notes-helpers';
import { countNotesForFolder } from '../notes-helpers';

class FolderList extends Component{
    currentNumberOfNotes(notes, folder){
       const count = countNotesForFolder(notes, folder);
       return count;
    }

    changeColor(event){
        event.target.style.backgroundColor = 'rgba(255, 228, 196, 0.288)';
        event.target.style.color = "blue";
    }

    reverseColor(event){
        event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.356)';
        event.target.style.color = "cornsilk";
    }

    render(){
        const currentData = this.props.data;
        const notes = this.props.data.notes;
        return(
            currentData.folders.map((folderName, index) =>
            <Link to={`/folder/${folderName.id}`} className="currentSelectLinkElement">
                <div key={index} className="folderContainer singleFolder" tabIndex={index} onFocus={this.changeColor} onBlur={this.reverseColor}>
                    <span className="folderItem singleFolderName">                
                            {folderName.name}                    
                    </span>
                    <span className="folderItem singleFolderNotesCountIndicator">
                        {this.currentNumberOfNotes(notes, folderName.id)}
                    </span>           
                </div>
            </Link> 
            )
        );
    }
}

export default FolderList;