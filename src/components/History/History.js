import React, { Component } from 'react';
import { connect } from 'react-redux';
import './History.scss';
import { deleteCities } from '../../store/actions';

class History extends Component {
    getWeatherFromHistory = ({ target }) => {
        this.props.getInfoFromApi(target.innerHTML);
    };

    deleteCities = () => {
        this.props.deleteCities();
    };

    render() {
        const { cities } = this.props;

        const isCities = Object.keys(cities).length !== 0;
        const btn = isCities ? (
            <button onClick={this.deleteCities}>&#10006;</button>
        ) : (
            ''
        );

        return (
            <div className='history'>
                <ul>
                    {Object.keys(cities).map((city, i) => (
                        <li key={i} onClick={this.getWeatherFromHistory}>
                            {`${city[0].toUpperCase()}${city.slice(1)}`}
                        </li>
                    ))}
                </ul>
                {btn}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cities: state.cities,
});

export default connect(mapStateToProps, { deleteCities })(History);
