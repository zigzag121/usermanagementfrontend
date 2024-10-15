import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/:id/edit" element={<UserEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
