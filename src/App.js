import { useState, useEffect } from "react";
import "./App.css";
import PostsList from "./components/PostsList";

function App() {
  const [post, setPost] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(post);

  let content = <p>Empty</p>;
  if (post.length > 0) {
    content = <PostsList posts={post} />;
  }
  return (
    <div>
      <h1>POSTS</h1>
      {content}
    </div>
  );
}

export default App;
