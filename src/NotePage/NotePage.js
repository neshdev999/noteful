import React , { Component } from 'react';
import './NotePage.css';
import '../MainPage/MainPage.css';
import NoteSidebar from '../NoteSidebar/NoteSidebar';
import Note from '../Note/Note';
import NoteDesc from '../NoteDesc/NoteDesc';


class MainPage extends Component{
    render(){
        return(
            <div className="mainPageContainer">
                <div className="mainPageContentItem">
                    <NoteSidebar currentFolder={this.props.currentFolder} OnGoBackClick={this.props.OnGoBackClick}/>
                </div>
                <div className="mainPageContentItem mainPageNoteItem">
                    <div>
                        <Note noteContent={this.props.currentNote}/>
                    </div>
                    <div>
                        <NoteDesc noteDescData={this.props.currentNote.content}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;