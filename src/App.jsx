import { useState } from "react"; // > This hook lets you track data that can change; when it changes, React re-renders the component.

function App() {
  const [message, setMessage] = useState("JavaScript is so cool.");
  // useState returns two values:
  // - message: the current state value
  // - setMessage: a function to update that value
  // "JavaScript is so cool." is the initial state.

  function handleClick() {
    // Function created to update the message state
    setMessage("I love React"); // Updates state and triggers a re-render
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </div>
  );
}
// The current state value is displayed in the h1.
// Clicking the button runs handleClick, which updates the state
// and causes the h1 to re-render with the new message.
export default App;
