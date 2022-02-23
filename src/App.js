import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Fish from './components/Fish';
import Header from './components/Header';
import Inventory from './components/Inventory';
import Order from './components/Order';
import { db } from './firebase-config';
import sampleFishes from './sample-fishes';

function App() {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});
  const { storeID } = useParams();
  const storeCollectionRef = collection(db, storeID);

  useEffect(() => {
    console.log('useEffect running');
    async function getFishes() {
      let data = [];
      await onSnapshot(storeCollectionRef, snapshot => {
        snapshot.docs.forEach(doc => {
          data.push({ ...doc.data() });
        });
        setFishes({ ...data });
      });
    }
    getFishes();
  }, []);

  const loadSample = () => {
    Object.values(sampleFishes).forEach(fish => {
      addDoc(storeCollectionRef, {
        name: fish.name,
        image: fish.image,
        desc: fish.desc,
        price: fish.price,
        status: fish.status,
      });
    });
  };

  const addFish = (fishes, fish) => {
    // setFishes({ ...fishes, [`fish-${Date.now()}`]: fish });
    addDoc(storeCollectionRef, {
      name: fish.name,
      image: fish.image,
      desc: fish.desc,
      price: fish.price,
      status: fish.status,
    });
  };

  const addToOrder = (order, key) => {
    setOrder({ ...order, [key]: order[key] + 1 || 1 });
  };

  const removeFromOrder = (order, key) => {
    const newOrder = { ...order };
    delete newOrder[key];
    setOrder({ ...newOrder });
  };

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="list-of-fishes">
          {Object.keys(fishes).map(key => (
            <Fish
              key={key}
              index={key}
              order={order}
              addToOrder={addToOrder}
              {...fishes[key]}
            />
          ))}
        </ul>
      </div>
      <Order order={order} fishes={fishes} removeFromOrder={removeFromOrder} />
      <Inventory loadSample={loadSample} addFish={addFish} fishes={fishes} />
    </div>
  );
}

export default App;
