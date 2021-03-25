import React , { Component } from 'react';
import './MainPage.css';

import FolderListHolder from '../FolderListHolder/FolderListHolder';
import NotesListHolder from '../NotesListHolder/NotesListHolder';

class MainPage extends Component{
    render(){
        return(
            <div className="mainPageContainer">
                <div className="mainPageContentItem">
                    <FolderListHolder data={this.props.data} />
                </div>
                <div className="mainPageContentItem mainPageNoteItem">
                    <NotesListHolder noteData={this.props.data} className="notesListHolder"/>
                </div>
            </div>
        );
    }
}

export default MainPage;