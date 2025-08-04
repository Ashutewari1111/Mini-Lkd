import React, { useEffect, useState } from 'react';

function Profile({ userId, api, onBack }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${api}/users/${userId}`).then(res => res.json()).then(setData);
  }, [userId, api]);

  if (!data) return <p>Loading...</p>;
  const { user, posts } = data;
  return (
    <div className="profile-view">
      <button onClick={onBack}>Back</button>
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Bio:</b> {user.bio}</p>
      <h3>Posts</h3>
      {posts.map(post => (
        <div key={post._id} className="profile-post">
          <span>{(new Date(post.createdAt)).toLocaleString()}</span>
          <p>{post.content}</p>
        </div>

      ))}
    </div>
  );
}

export default Profile;


