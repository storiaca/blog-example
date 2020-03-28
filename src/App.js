import React from "react";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import "./App.css";

function App() {
  return (
    <div className="blog-wrap">
      <Header />
      <Blog />
    </div>
  );
}

export default App;
