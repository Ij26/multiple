import React from "react";
import "./App.css";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paginated Posts</h1>
      </header>
      <main>
        <PostList />
      </main>
    </div>
  );
};

export default App;
