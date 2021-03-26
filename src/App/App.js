import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoteHeader from '../NoteHeader/NoteHeader';
import MainPage from '../MainPage/MainPage';
import FolderViewPage from '../FolderViewPage/FolderViewPage';
import NotePage from '../NotePage/NotePage';
import dummyStore from '../dummy-store';
import '../notes-helpers';
import { findFolder, findNote, getNotesForFolder } from '../notes-helpers';


class App extends React.Component {
  state={
    notes: [],
    folders: []
  }

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600);
  }

  render(){
    return (
      <div className='App'>
        <NoteHeader />
        <Switch>
          <Route 
            exact path='/' 
            render={(props)=>(
            <MainPage {...props} data={this.state} />
            )}
          />
          <Route 
            path='/folder/:folderId' 
            render={(props)=>{
            const {folderId} = props.match.params;
            const newNotes = getNotesForFolder(this.state.notes, folderId);
            console.log(newNotes);
            return <FolderViewPage {...props} data={this.state} currentNotes={newNotes}/>;
            }}
          />
          <Route
            path='/note/:noteId'
            render={(props)=>{
            const {noteId} = props.match.params;
            const singleNote = findNote(this.state.notes, noteId) || {};
            console.log(singleNote);
            console.log(singleNote['folderId']);            
            const currentFolderId  = singleNote.folderId;
            const singleFolder = findFolder(this.state.folders, currentFolderId) || {};
            console.log(singleFolder);
            return <NotePage {...props} currentNote={singleNote} currentFolder={singleFolder} OnGoBackClick={()=>props.history.goBack()}/>;   
            }}
          />
        </Switch>        
      </div>
    );
  }
}

export default App;
