import "./App.css";
import { useState } from "react";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [input, setInput] = useState("all");
  const handleShow = () => {
    setShowContent(true);
  };
  const handleDia = () => {
    setShowDialog(!showDialog);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="greeting-container">
      <div className="content-container">
        {!showContent && (
          <>
            <h1>Wellcome Enter your name</h1>
            <input
              placeholder="Enter your Name"
              onChange={handleChange}
            ></input>
            <button onClick={handleShow} className="save">
              submit
            </button>
          </>
        )}

        {showContent && (
          <>
            <h1 className="heading">Happy Womens Day To {input}</h1>
            {!showDialog&&<button onClick={handleDia} className="save">
              view message
            </button>}

            {showDialog && (
              <h3 className="dialog">
                Being a woman itself is a superpower.
                <br />
                Happy Women's Day to the superhero in my life
              </h3>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
