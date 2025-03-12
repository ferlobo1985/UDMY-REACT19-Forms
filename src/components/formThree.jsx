import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';



const lastNameComponent = ({
    field, // { name, value, onChange, onBlur},
    form:{ touched, errors},
    ...props
}) => (
    <>
        <label htmlFor={field.name}>{props.labelName}</label>
        <input
            type="text"
            className="form-control"
            {...field}
        />
        { errors[field.name] && touched[field.name] ?
            <span>{ errors[field.name]}</span>
        :null}
    </>
  
)

const FormThree = () => {

    const formikProps = {
        initialValues:{firstname:'', color:'',lastname:''},
        validationSchema:Yup.object({
            firstname: Yup.string().required('Sorry, firstname is required'),
            lastname: Yup.string().required('Sorry, lastname is required')
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

                            <Field
                                name="lastname"
                                component={lastNameComponent}
                                placeholder="Last name"
                                labelName="Enter your lastname"
                            />

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