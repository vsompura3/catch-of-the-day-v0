import AddFishForm from './AddFishForm';

function Inventory({ fishes, addFish, loadSample }) {
  return (
    <div>
      <h2>Inventory</h2>
      <AddFishForm addFish={addFish} fishes={fishes} />
      <button onClick={loadSample}>Load Sample Fishes</button>
    </div>
  );
}

export default Inventory;
