import React from 'react';

const FormThree = () => {
    return(
        <div className="container">
            <div className="col-md-12 mt-5">
                <form>
                    <label htmlFor="firstname">First name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        name="firstname"
                    />
                    
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default FormThree;