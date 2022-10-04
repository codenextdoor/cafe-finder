import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RestaurantContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import RestaurantDetail from "./routes/RestaurantDetail";
import RestaurantUpdate from "./routes/RestaurantUpdate";

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cafe/:id" element={<RestaurantDetail />} />
            <Route exact path="/cafe/update" element={<RestaurantUpdate />} />
          </Routes>
        </Router>
      </div>
    </RestaurantContextProvider>
  );
};

export default App;
