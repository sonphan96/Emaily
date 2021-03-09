import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

import formFields from './formFields';

class SurveyForm extends Component {
  renderField() {
    return _.map(formFields, field => {
      return <Field key={field.name} component={SurveyField} type="Text" label={field.label} name={field.name} />
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
          {this.renderField()}

          <Link to="/surveys" className="red btn-flat white-text" >
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat white-text right">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if(!values[name]){
      errors[name] = "You must provide a value";
    }
  });


  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);