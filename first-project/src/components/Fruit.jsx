export default function Fruit({ name, price, soldout }) {
  return (
    <div>
      <h3>
        {name} ${price} {soldout ? "soldOut" : ""}
      </h3>
    </div>
  );
}
