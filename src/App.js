import "./App.css";
import React from "react";
import Image from "./G63.jpg";

function App() {
  return (
    <div className="image">
      <h1> Welcome To My Images</h1>
      <img src="M8.jpg" alt="MyBmw" width="400px" />
      <img src={Image} alt="MyCar" width="400px" />
      
    </div>
  );
}

export default App;
