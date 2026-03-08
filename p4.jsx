import React from "react";
import ReactDOM from "react-dom/client";

/* Example Component */
function Example() {
  return (
    <div>
      <h2>Example View</h2>
      <p>This is the Example component.</p>
    </div>
  );
}

/* States Component */
function States() {
  const states = ["California", "Texas", "Florida", "New York", "Washington"];

  return (
    <div>
      <h2>States View</h2>
      <ul>
        {states.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
    </div>
  );
}

/* Parent component controlling the switch */
function App() {
  const [showExample, setShowExample] = React.useState(true);

  function switchView() {
    setShowExample(!showExample);
  }

  return (
    <div>
      <button onClick={switchView}>
        {showExample ? "Switch to States" : "Switch to Example"}
      </button>

      {showExample ? <Example /> : <States />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
