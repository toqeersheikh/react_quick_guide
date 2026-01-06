import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1765648684613-b77086065bc1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664199486303-fd88b0a10414?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
