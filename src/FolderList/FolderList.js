import React, { Component } from 'react';
import './FolderList.css';

class FolderList extends Component{
    render(){
        const currentData = this.props.data;
        return(
            currentData.folders.map((folderName, index) =>
            <div key={index} className="singleFolder">{folderName.name}</div>
            )
        );
    }
}

export default FolderList;