import { formatPrice } from '../helpers';

function Fish({ index, name, image, price, desc, status, order, addToOrder }) {
  const isAvailable = status === 'available';
  const buttonText = isAvailable ? 'Add to Order' : 'Sold Out';
  return (
    <li className="menu-fish">
      <img src={image} alt="" />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable} onClick={() => addToOrder(order, index)}>
        {buttonText}
      </button>
    </li>
  );
}

export default Fish;
