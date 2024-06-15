import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
function App() {
  const person = {
    name: "rob",
    message: "hi there",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Fruits />
    </div>
  );
}

export default App;
