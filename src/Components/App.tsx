import  { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Favorites from "./Favorites";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div>
        {/* Add this Link component wherever you want the button to appear */}
        <Link to="/solitaire" target="_blank" rel="noopener">
          Play Solitaire
        </Link>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/solitaire" element={<iframe src="../../public/solitaire/index.html" width={window.innerWidth} height={window.innerHeight}/>} />
          <Route
            path="/search"
            element={
              <PrivateRoute user={user}>
                <Search
                  user={user}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute user={user}>
                <Favorites user={user} favorites={favorites} />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/search" />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
