import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const FormThree = () => {

    const formikProps = {
        initialValues:{firstname:'', color:''},
        validationSchema:Yup.object({
            firstname: Yup.string().required('Sorry, firstname is required')
        }),
        onSubmit: values => {
            console.log(values)
        }
    };

    return(
        <div className="container">
            <div className="col-md-12 mt-5">
                <Formik {...formikProps}>
                    { formik => (
                        <Form>
                            <label htmlFor="firstname">First name</label>
                            <Field 
                                className="form-control" 
                                type="text" 
                                name="firstname"
                            />
                            {/* <ErrorMessage name="firstname"/> */}
                            { formik.errors.firstname && formik.touched.firstname ?
                                <span>{formik.errors.firstname}</span>
                            :null}
                            <hr className="mb-4" />

                            <label htmlFor="color">Color</label>
                            <Field
                                as="select"
                                name="color"
                                className="cutom-select"
                            >
                                <option values="red">Red</option>
                                <option values="green">Green</option>
                                <option values="blue">Blue</option>
                            </Field>


                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        
    )
}

export default FormThree;