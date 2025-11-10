import React from "react";
import Card from "./components/card";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div className="parent">
      <Card
        user="Max"
        img="https://images.unsplash.com/photo-1569292316763-0b667e9e960c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900"
      />
      <Card
        user="Nick"
        img="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900"
      />
      <Card
        user="Dexter"
        img="https://images.unsplash.com/photo-1704731297889-6d54dc06da74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=900"
      />
      <Card
        user="Jane"
        img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988"
      />
    </div>
  );
};

export default App;
