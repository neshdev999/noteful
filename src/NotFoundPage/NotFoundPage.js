import React, { Component } from 'react';
import './NotFoundPage.css';

class NotFoundPage extends Component {
  render() {
    return (
        <div>   
            <h2>Page Not Found</h2>
            <p>This page doesn't exist, try going back or using the navigation menu</p>
        </div>
    );
  }
}

export default NotFoundPage;