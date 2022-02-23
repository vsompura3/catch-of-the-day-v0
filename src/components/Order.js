import { formatPrice } from '../helpers';

function Order({ fishes, order, removeFromOrder }) {
  const orderIDs = Object.keys(order);
  const total = orderIDs.reduce((prevTotal, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish?.status === 'available';
    if (isAvailable) return prevTotal + (count * fish.price || 0);
    return prevTotal;
  }, 0);

  const renderOrder = key => {
    const fish = fishes[key];
    const count = order[key];
    if (fish?.status === 'unavailable') {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : 'fish'} is no longer available.
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          {count}lbs - {fish.name}
        </span>
        <span className="price">{formatPrice(count * fish.price)}</span>
        <button onClick={() => removeFromOrder(order, key)}>&times;</button>
      </li>
    );
  };

  return (
    <div className="order-wrap">
      <h2>Your Orders</h2>
      <ul className="order">{orderIDs.map(renderOrder)}</ul>
      <div className="total">
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
}

export default Order;
