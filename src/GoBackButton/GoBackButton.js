import React , { Component } from 'react';
import './GoBackButton.css';

class GoBackButton extends Component{
    render(){
        return(
            <div className="goBackButtonContainer">
                <button type="button" onClick={this.props.OnGoBackClick}>Go Back</button>
            </div>
        );
    }
}

export default GoBackButton;