import Fruit from "./Fruit";
export default function Fruits() {
  //const fruits = ["apple", "mango", "banana", "orange", "pineapple"];
  const fruits = [
    { name: "apple", price: "10", soldout: false },
    { name: "mango", price: "6", soldout: false },
    { name: "banana", price: "2", soldout: true },
    { name: "orange", price: "5", soldout: false },
    { name: "pineapple", price: "8", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
