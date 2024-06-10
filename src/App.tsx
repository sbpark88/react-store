import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Main</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route errorElement={<p>something wrong!</p>}>
          <Route index element={<Main />} />
          <Route path="/posts" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
