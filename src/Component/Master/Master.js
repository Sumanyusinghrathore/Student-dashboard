import '../Master/Master.css';
import surpass from '../../assets/icon/SURPASS_ACADEMY_LOGO.png'
import dashboard from '../../assets/icon/dashboard.svg'
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import left from '../../assets/icon/Left_arrow.svg'

function Master() {

    const [isDivVisible, setIsDivVisible] = useState(false);

    const toggleDiv = () => {
      setIsDivVisible(!isDivVisible);
    };

    const [isOpen, setIsOpen] = useState(true);

  // Handler to toggle the form div
  const toggleFormDiv = () => {
    setIsOpen(!isOpen); // Only toggles the form div
  };


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        role: '',
        username: '',
        password: '',
        status: '',
        terms: false,
      });
    
      const [users, setUsers] = useState([]);
      const [editIndex, setEditIndex] = useState(null);
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        if (!formData.mobile) newErrors.mobile = 'Mobile Number is required.';
        if (!formData.role) newErrors.role = 'Role is required.';
        if (!formData.username) newErrors.username = 'Username is required.';
        if (!formData.password) newErrors.password = 'Password is required.';
        if (!formData.status) newErrors.status = 'Please select a status.';
        if (!formData.terms) newErrors.terms = 'You must agree before submitting.';
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
          if (editIndex !== null) {
            // Update existing user
            const updatedUsers = [...users];
            updatedUsers[editIndex] = { ...formData };
            setUsers(updatedUsers);
            setEditIndex(null);
          } else {
            // Add new user
            setUsers([...users, { ...formData }]);
          }
    
          // Clear form after submission
          setFormData({
            name: '',
            email: '',
            mobile: '',
            role: '',
            username: '',
            password: '',
            status: '',
            terms: false,
          });
          setErrors({});
        } else {
          setErrors(validationErrors);
        }
      };
    
      const handleEdit = (index) => {
        setFormData(users[index]);
        setEditIndex(index);
      };
    
      const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
      };

    return (
        <div class="container-fluid">
  <div class="row justify-content-center">
  <div className="col-12 col-md-3 d-flex align-items-center justify-content-center vh-100">
      <div className="card custom-card text-center">
        <img src={surpass} className='logo_img' alt='logo' />
        <div className='pt-3'>
        <p><Link className='text-white fs-18'><img src={dashboard}></img>Dashboard</Link></p>
        <p><Link className='text-white fs-18 ' onClick={toggleDiv}><img src={dashboard}></img>Master</Link></p>
        {isDivVisible && (
        <div className="bottom-div">
          <p><Link className='text-white fs-18'><img src={dashboard}></img>Role</Link></p>
          <p><Link className='text-white fs-18'><img src={dashboard}></img>User Right</Link></p>
          <p><Link className='text-white fs-18' onClick={toggleFormDiv}><img src={dashboard}></img>User</Link></p>
        </div>
      )}
        <p><Link className='text-white fs-18'><img src={dashboard}></img>Student</Link></p>
        <p><Link className='text-white fs-18'><img src={dashboard}></img>Course</Link></p>
        <p><Link className='text-white fs-18'><img src={dashboard}></img>Video</Link></p>
        <p><Link className='text-white fs-18'><img src={dashboard}></img>Manage Course</Link></p>
        <p><Link className='text-white fs-18'><img src={dashboard}></img>Live Chat</Link></p>
        <p><Link className='text-white fs-18'><img src={dashboard}></img>Activities</Link></p>
        </div>
      </div>
    </div>

    {isOpen && (
        <div class="col-12 col-md-9 d-flex justify-content-center align-items-center">
        <div class="card custom-card1">
          <div class="card-body d-flex justify-content-between">
            <p><img src={left} className='m-3' alt=''></img>Add User</p>
            <p>Stephen C.</p>
          </div>
          <div className="card">
    <div className="card-header bg-gray">
    Add User
    </div>
    <div class="card-body">
    <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
          {/* Name, Email, Mobile, Role Row */}
          <div className="col-md-12">
            <div className="row">
              {/* Name */}
              <div className="col-md-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">{errors.name}</div>
              </div>
  
              {/* Email */}
              <div className="col-md-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>
  
              {/* Mobile Number */}
              <div className="col-md-3">
                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">{errors.mobile}</div>
              </div>
  
              {/* Role */}
              <div className="col-md-3">
    <label htmlFor="role" className="form-label">Role</label>
    <select
      className={`form-select ${errors.role ? 'is-invalid' : ''}`}
      id="role"
      name="role"
      value={formData.role}
      onChange={handleChange}
      required
    >
      <option value="" disabled>Choose...</option>
      <option value="admin">Admin</option>
      <option value="teacher">Teacher</option>
      <option value="staff">Staff</option>
      <option value="accountant">Accountant</option>
    </select>
    <div className="invalid-feedback">{errors.role}</div>
  </div>
            </div>
          </div>
  
          {/* Username, Password, Status Row */}
          <div className="col-md-12">
            <div className="row">
              {/* Username */}
              <div className="col-md-4">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">@</span>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>
              </div>
  
              {/* Password */}
              <div className="col-md-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">{errors.password}</div>
              </div>
  
              {/* Status */}
              <div className="col-md-4">
                <label htmlFor="status" className="form-label">Status</label>
                <select
                  className={`form-select ${errors.status ? 'is-invalid' : ''}`}
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Choose...</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <div className="invalid-feedback">{errors.status}</div>
              </div>
            </div>
          </div>
  
          {/* Terms Checkbox */}
          <div className="col-12">
            <div className="form-check">
              <input
                type="checkbox"
                className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="terms">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">{errors.terms}</div>
            </div>
          </div>
  
          {/* Submit Button */}
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
    </div>
  </div>
  <div className="card mt-5">
    <div className="card-header bg-gray">
    List User
    </div>
    <div className="card-body">
    <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Role</th>
                <th>Username</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>
                  <td>{user.status}</td>
                  <td>
                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  </div>
        </div>
      </div>
      )}
  </div>
</div>

    )

}
export default Master;