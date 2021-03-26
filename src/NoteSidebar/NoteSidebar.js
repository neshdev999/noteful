import React , { Component } from 'react';
import './NoteSidebar.css';
import GoBackButton from '../GoBackButton/GoBackButton';
import FolderIndicator from '../FolderIndicator/FolderIndicator';

class NoteSidebar extends Component{
    render(){
        return(
            <div className="noteSidebarContainer">
                <div>
                    <GoBackButton />
                </div>
                <div>
                    <FolderIndicator currentFolder={this.props.currentFolder}/>
                </div>
            </div>
        );
    }
}

export default NoteSidebar;