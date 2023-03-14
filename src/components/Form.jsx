import React, { useState } from 'react';

export default function Form() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form fields
    let errors = {};
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    setFormErrors(errors);
    // submit form if no errors
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formValues);
    }
  };

  return (
    <div className="form-container d-flex justify-content-center flex-column align-items-center">
        <div className="form d-flex justify-content-center flex-column align-items-center">
        <h3 className="mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email:</label>
                <input type="email" name="email" value={formValues.email} onChange={handleChange} className="form-control" />
                {formErrors.email && <span className="err">{formErrors.email}</span>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" name="password" value={formValues.password} onChange={handleChange} className="form-control" />
                {formErrors.password && <span className="err">{formErrors.password}</span>}
              </div>
              <div className="d-flex justify-content-center mt-5">
                <button type="submit" className="btn form-submit-btn">Login</button>
              </div>
            </form>
        </div>
    </div>
  );
}

