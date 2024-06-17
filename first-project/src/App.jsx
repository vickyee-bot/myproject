import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
function App() {
  const person = {
    name: "rob",
    message: "hi there",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
