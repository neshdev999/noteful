import React from 'react';
import NoteHeader from '../NoteHeader/NoteHeader';
import MainPage from '../MainPage/MainPage';
import dummyStore from '../dummy-store';

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
        <MainPage data={this.state}/>        
      </div>
    );
  }
}

export default App;
