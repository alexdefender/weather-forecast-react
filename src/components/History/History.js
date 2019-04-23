import React, {Component} from "react";
import "./style.scss";
import {connect} from "react-redux"

class History extends Component {

    render() {
        this.props.appState.cities.map(item => console.log(item.city))

        const render = this.props.appState.cities.map(item => {
            console.log(this.props.appState.cities.includes(item))

        });

        return (

            <div className="history">
                <ul>
                    <li>Kiev</li>
                    <li>Kiev</li>
                    <li>Kiev</li>
                    <li>Kiev</li>
                    <li>Kiev</li>
                </ul>
                <button>&#10006;</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        appState: state
    })
)(History);
