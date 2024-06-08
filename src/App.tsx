import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import { Link, Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Main</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route errorElement={<p>something wrong!</p>}>
          <Route
            index
            element={
              <>
                <Counter />
                <Todo />
              </>
            }
          />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
