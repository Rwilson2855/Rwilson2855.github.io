import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./ResumeLandingPage";
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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/solitaire" element={
            <iframe
              src="../../public/solitaire/index.html"
              width={window.innerWidth}
              height={window.innerHeight}
              title="Solitaire"
              style={{ border: "none" }}
            />
          } />
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
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;