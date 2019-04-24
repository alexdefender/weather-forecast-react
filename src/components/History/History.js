import React, {Component} from "react";
import "./style.scss";
import {connect} from "react-redux"

class History extends Component {
    constructor(props) {
        super(props);
        this.citiesHistory = [];
        this.checkWeatherFromHistory = this.checkWeatherFromHistory.bind(this);
        this.delAllCities = this.delAllCities.bind(this);
        this.checkCities = this.checkCities.bind(this);
    }

    checkWeatherFromHistory(e) {
        this.props.getInfoFromApi(e.target.innerHTML)
    }

    delAllCities() {
        this.props.delAllCities();
    }

    /*
    * check cities for duplicate and out limit to 5
    * */
    checkCities() {
        this.props.appState.cities.map((item, i) => {
            if (item === null) {
                this.citiesHistory = [];
            } else {
                const newCity = item.toUpperCase();
                if (!this.citiesHistory.includes(newCity)) {
                    i > 3 ? this.citiesHistory.splice(0, 1, newCity) : this.citiesHistory.push(newCity);
                }
            }
        })
    }

    render() {
        this.checkCities();

        return (
            <div className="history">
                <ul>
                    {this.citiesHistory.map((city, i) =>
                        <li key={i} onClick={this.checkWeatherFromHistory}>{city}</li>)}
                </ul>
                <button onClick={this.delAllCities}>&#10006;</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        appState: state
    }),
    dispatch => ({
        delAllCities: () => {
            const payload = null;
            dispatch({type: "DELETE_CITIES", payload});
        }
    })
)(History);
