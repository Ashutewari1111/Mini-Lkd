import React from 'react';

function Navbar({ user, onLogout, setViewProfile }) {
  return (
    <nav className="navbar">
      <h1>Mini LinkedIn</h1>
      {user && (
        <div>
          <span onClick={() => setViewProfile(user.id)}>
            {user.name}
          </span>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


