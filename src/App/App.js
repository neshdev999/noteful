import React from 'react';
import { Route } from 'react-router-dom';
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
        {/* <MainPage data={this.state}/>         */}
        <Route 
          path='/' 
          render={(props)=>(
            <MainPage {...props} data={this.state} />
          )}
        />
        <Route 
          path='/folder/b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1' 
          render={(props)=>{
            const newNotes = getNotesForFolder(this.state.notes, 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1');
            console.log(newNotes);
            return <FolderViewPage {...props} data={this.state} currentNotes={newNotes}/>;
          }}
        />
        <Route
          path='/note/cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
          render={(props)=>{
            const singleNote = findNote(this.state.notes, 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1') || {};
            console.log(singleNote);
            console.log(singleNote['folderId']);            
            const currentFolderId  = singleNote.folderId;
            const singleFolder = findFolder(this.state.folders, currentFolderId) || {};
            console.log(singleFolder);
            return <NotePage {...props} currentNote={singleNote} currentFolder={singleFolder} />;   
          }}
        />
      </div>
    );
  }
}

export default App;
