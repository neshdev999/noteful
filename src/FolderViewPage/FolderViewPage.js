import React , { Component } from 'react';
import './FolderViewPage.css';
import '../MainPage/MainPage.css';

import FolderListHolder from '../FolderListHolder/FolderListHolder';
import NotesListHolder from '../NotesListHolder/NotesListHolder';

class FolderViewPage extends Component{
    render(){
        return(
            <div className="mainPageContainer">
                <div className="mainPageContentItem">
                    <FolderListHolder data={this.props.data} />
                </div>
                <div className="mainPageContentItem mainPageNoteItem">
                    <NotesListHolder noteData={this.props.currentNotes} className="notesListHolder"/>
                </div>
            </div>
        );
    }
}

export default FolderViewPage;