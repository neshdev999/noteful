import React , { Component } from 'react';
import './FolderIndicator.css';

class FolderIndicator extends Component{
    render(){
        return(
            <div className="folderIndicatorContainer">
                 {this.props.currentFolder.name}
            </div>
        );
    }
}

export default FolderIndicator;