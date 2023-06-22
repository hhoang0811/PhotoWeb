import React from "react";
// import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
import { Formik, Form, FastField} from "formik";
import * as Yup from 'yup'

import { PHOTO_CATEGORY_OPTIONS } from '../../../../constant/Global';
import InputField from "../../../../CustomField/InputField";
import SelectField from "../../../../CustomField/SelectField";
import RandomPhotoField from "../../../../CustomField/RandomPhotoField";

function PhotoForm(props) {

    const { isAddMode } = props

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Trường bắt buộc'),

        categoryId: Yup.number().required('Trường bắt buộc'),

        photo: Yup.string().required('Trường bắt buộc'),
    });

    return (
        <Formik 
            initialValues={props.initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
        {formikform => {

            const { isSubmitting } = formikform
            return (
                <Form>
                        <FastField 
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Tiêu đề ảnh"

                        />

                        <FastField 
                            name="categoryId"
                            component={SelectField}

                            label="category"
                            placeholder="What's your photo category"
                            options={PHOTO_CATEGORY_OPTIONS}

                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        >
                        </FastField>

                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>
                                {isSubmitting && <Spinner size="sm"/>}
                                {isAddMode ? 'Add to album' : 'Update photo'}
                            </Button>
                        </FormGroup>
                    </Form>
            )
        }}
                    
        </Formik>
        
    );
}

export default PhotoForm;