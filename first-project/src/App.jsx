import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Form from "./components/Form";
function App() {
  const person = {
    name: "rob",
    message: "hi there",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
