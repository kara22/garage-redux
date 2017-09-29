import React, { Component } from 'react';
import CarListItem from '../components/car_list_item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';
import { bindActionCreators } from 'redux';

class CarsList extends Component {

  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  render (){

    const renderCars = this.props.cars.map((car) => {
      return (
        <Link to={`/`} key={car.id}>
          <CarListItem car={car} />
        </Link>
      );
    });

    return (
      <div>
        {renderCars}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
