import React, { useState } from 'react';

function AuthForm({ onAuth, api }) {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({});

  const handleChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`${api}/auth/${isLogin ? 'login' : 'register'}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    });
    if (res.ok) {
      const data = await res.json();
      isLogin ? onAuth(data.user) : setIsLogin(true);
      if (!isLogin) alert('Registration success, please login!');
    } else {
      alert('Auth failed!');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        {!isLogin && (
          <>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="bio" placeholder="Bio" onChange={handleChange} required />

          </>
        )}
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create new account" : "Already have an account?"}
        </p>
      </form>
    </div>
  );
}

export default AuthForm;

