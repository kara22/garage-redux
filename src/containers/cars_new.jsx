import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';


class CarsNew extends Component {


  // renderField(field) {
  //     return (
  //       <div className="form-group">
  //         <label>{field.label}</label>
  //         <input
  //           className="form-control"
  //           type={field.type}
  //           {...field.input}
  //         />
  //       </div>
  //     );
  //   }

  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }


  render () {



    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={renderField}
          />
          <label htmlFor="model">Model</label>
          <Field
            className="form-control"
            label="Model"
            name="model"
            component="input"
          />
          <label htmlFor="owner">Owner</label>
          <Field
            className="form-control"
            label="Owner"
            name="owner"
            component="input"
          />
          <label htmlFor="plate">Plate</label>
          <Field
            className="form-control"
            label="Plate"
            name="plate"
            component="input"
          />
          <button className="btn btn-primary" type="submit">
            Create Car
          </button>
        </form>
      </div>
    );
  }
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input}  type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const validate = values => {
  const errors = {}
  if (!values.brand) {
    errors.brand = 'Requis'
  } else if (values.brand.length > 15) {
    errors.brand = 'Must be 15 characters or less'
  }
  return errors
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm',
  validate // a unique identifier
})(
  connect(mapStateToProps, { createCar })(CarsNew)
);
