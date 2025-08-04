import React, { useState, useEffect } from 'react';

function PostFeed({ api, setViewProfile }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${api}/posts`).then(res => res.json()).then(setPosts);
  }, [api]);

  return (
    <div className="post-feed">
      {posts.map(post => (
        <div key={post._id} className="post">
          <span className="author" onClick={() => setViewProfile(post.author._id)}>
            {post.author.name}
          </span>
          <span className="timestamp">{(new Date(post.createdAt)).toLocaleString()}</span>

          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostFeed;


