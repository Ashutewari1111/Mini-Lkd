import React, { useState, useEffect } from 'react';
import AuthForm from './components/AuthForm';
import PostForm from './components/PostForm';
import PostFeed from './components/PostFeed';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

const API = "http://localhost:5000/api";

function App() {
  const [user, setUser] = useState(null);
  const [viewProfile, setViewProfile] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} setViewProfile={setViewProfile} />
      {!user ? (
        <AuthForm onAuth={handleLogin} api={API} />
      ) : viewProfile ? (
        <Profile
          userId={viewProfile}
          api={API}
          onBack={() => setViewProfile(null)}
        />
      ) : (
        <>
          <PostForm user={user} api={API} />
          <PostFeed api={API} setViewProfile={setViewProfile} />
        </>
      )}
    </div>
  );
}

export default App;
