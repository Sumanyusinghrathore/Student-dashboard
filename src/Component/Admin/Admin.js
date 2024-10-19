import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import login from '../../assets/login_img.png';
import acadmy from '../../assets/Academy.png';
import '../Admin/Admin.css';


function Admin() {
    const [name, setName] = useState(''); // State for the name
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ password: '' });
    const navigate = useNavigate(); // Initialize useNavigate

    const correctName = 'admin'; // Expected name
    const correctPassword = '123456'; // Expected password

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = { password: '' };

        // Validate password
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }

        setErrors(newErrors);

        // If there are no errors and credentials are correct, navigate to master page
        if (!newErrors.password) {
            if (name === correctName && password === correctPassword) {
                // Redirect to master page
                navigate('/master'); // Adjust the path as per your routes
            } else {
                setErrors({ ...newErrors, password: 'Invalid name or password.' });
            }
        }
    };

    return (
        <div>
            <div className='Container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-7'>
                            <img alt='' src={login} style={{ width: "100%" }} />
                        </div>
                        <div className='col-12 col-lg-5 login_form'>
                            <div>
                                <div className='text-center'>
                                    <img src={acadmy} alt='' />
                                    <h1>Login to your Account</h1>
                                    <p>Lorem Ipsum is simply dummy text printing</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className='p-3' htmlFor="exampleInputName">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputName"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} // Update name state
                                            placeholder="Enter name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className='p-3' htmlFor="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                        {errors.password && <small className="text-danger">{errors.password}</small>}
                                    </div>
                                    <button type="submit" className="btn btn-primary full-width mt-4">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
