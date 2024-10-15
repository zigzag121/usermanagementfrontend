import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../services/userService';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(setUser);
  }, [id]);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };
  
  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.userID}</p>
      <p><strong>Email:</strong> {user.userEmail}</p>
      <p><strong>User Type:</strong> {user.userType}</p>
      <p><strong>Date Joined:</strong> {formatDate(user.dateJoined)}</p>
      <p><strong>Last Updated:</strong> {formatDate(user.dateLastUpdated)}</p>
    </div>
  );
};

export default UserDetails;
