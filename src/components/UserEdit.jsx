import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../services/userService';

function UserEdit() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    userEmail: '',
    password: '',
    useId:'',
    userType: 2, //regular
  });

  useEffect(() => {
    getUserById(id)
      .then((data) => {
        setUser(data);
        setFormData({
          userEmail: data.userEmail,
          password: data.password,
          userType: data.userType,
          userId: data.userID
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateUser(id, formData)
      .then((response) => {
        console.log('User updated successfully:', response);
      })
      .catch((error) => console.error('Error updating user:', error));
  };

  if (loading) {
    return <p>Loading user data...</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }s

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="userType">User Type:</label>
          <select
            className="form-control"
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value={1}>Admin</option>
            <option value={2}>Regular</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default UserEdit;
