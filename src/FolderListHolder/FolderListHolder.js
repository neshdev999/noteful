import React, { Component } from 'react';
import './FolderListHolder.css';

import FolderList from '../FolderList/FolderList';
import AddFolderButton from '../AddFolderButton/AddFolderButton';

class FolderListHolder extends Component{
    render(){
        return(
            <div className="folderListContainer">
                <div className="folderListContainerItem listContainer">
                    <FolderList data={this.props.data}/>
                </div>
                <div className="folderListContainerItem buttonContainer">
                    <AddFolderButton />
                </div>
            </div>            
        );
    }
}

export default FolderListHolder;