import React from "react";
import { Bookmark } from "lucide-react";
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png"
            alt="logo"
          />
          <button>
            Save
            <Bookmark size={20} />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>120$/hr</h3>
            <p>San Francisco, USA </p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
