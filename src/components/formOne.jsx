import { Formik } from "formik";
import * as Yup from 'yup';

const FormOne = () => {

    return (
      <Formik
        initialValues={{
          firstname:'',
          lastname:'',
          email:''
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
          .required('Sorry, this is required')
          .max(5,'Sorry, the name is to long'),
          lastname: Yup.string().required('Sorry, this is required'),
          email:Yup.string()
          .required('Sorry, this is required')
          .email('Not a valid email')
        })}
        // validate={ values => {
        //   const errors = {};

        //   if(!values.firstname){
        //     errors.firstname = 'Sorry, this is required'
        //   }
        //   if(!values.lastname){
        //     errors.lastname = 'Sorry, this is required'
        //   }
        //   if(!values.email){
        //     errors.email = 'Sorry, this is required'
        //   } else if (
        //     !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)
        //   ){
        //      errors.email = 'invalid email'
        //   }

        //   return errors;
        // }}
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
        { ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        })=> (
          <div className="container">
            <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>
      
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                  />
                  { errors.firstname && touched.firstname ?
                    <span>{errors.firstname}</span>
                  :null}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    onChange={handleChange}
                    value={values.lastname}
                  />
                  { errors.lastname && touched.lastname ?
                    <span>{errors.lastname}</span>
                  :null}
                </div>
              </div>
      
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  onChange={handleChange}
                  value={values.email}
                  placeholder="you@example.com"
                />
                  { errors.email && touched.email ?
                    <span>{errors.email}</span>
                  :null}
              </div>
      
              
              <hr className="mb-4"/>
              <button className="btn btn-primary btn-lg btn-block" type="submit">
                Submit
              </button>
            </form>
            </div>
          </div>
        )}
      </Formik>
    );

}

export default FormOne;