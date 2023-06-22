import React from "react";
import PropTypes from 'prop-types'
import Select from 'react-select'
import { ErrorMessage } from "formik";
import { FormFeedback, FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
  };
  
  SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
  }

function SelectField(props) {
    const { field, form, options, label, placeholder, disabled } = props;
    const { name, value } = field;
    const { errors, touched } = form
    const showError = errors[name] && touched[name];
    const selectOption = options.find(option => option.value === value);

    const handleSelect = (selectOption) => {
        const selectValue = selectOption ? selectOption.value : selectOption;

        const changeEvent = {
            target: {
                name,
                value: selectValue
            }
        };
        field.onChange(changeEvent)
    }

    const handleBlur = () => {
		form.setFieldTouched(name, true)
    }

    return (  
        <FormGroup>
            { label && <Label for={name}>{label}</Label> }
            <Select 
                id={name}
                { ...field }
                onBlur={handleBlur}
                value={selectOption}
                onChange={handleSelect}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
                
                className={showError ? 'is-invalid' : ''}
            />
            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>
    );
}
export default SelectField;