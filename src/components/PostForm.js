import React, { useState } from 'react';

function PostForm({ user, api }) {
  const [content, setContent] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(`${api}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authorId: user.id, content })
    });
    setContent('');
    window.location.reload();
  };


  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea value={content} onChange={e => setContent(e.target.value)} required placeholder="Write a post..." />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;



