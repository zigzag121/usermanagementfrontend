import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userID}>
              <td>{user.userID}</td>
              <td>{user.userEmail}</td>
              <td>{user.userType}</td>
              <td>
                <Link to={`/user/${user.userID}`} className="btn btn-primary btn-sm">
                  View
                </Link>
                <Link to={`/user/${user.userID}/edit`} className="btn btn-secondary btn-sm ms-2">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
