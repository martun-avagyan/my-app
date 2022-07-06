import "./App.css";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [clickedUser, setClickedUser] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/user"
          element={<Users setClickedUser={setClickedUser} />}
        />
        <Route
          path={`/user/${clickedUser}`}
          element={<UserPosts clickedUser={clickedUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
