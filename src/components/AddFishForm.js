import { useRef } from 'react';

function AddFishForm({ fishes, addFish }) {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const statusRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  const createFish = e => {
    e.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    addFish(fishes, fish);
    formRef.current.reset();
    nameRef.current.focus();
  };

  return (
    <form className="fish-edit" onSubmit={createFish} ref={formRef}>
      <input type="text" placeholder="Fisn Name" ref={nameRef} />
      <input type="text" placeholder="Fish Price" ref={priceRef} />
      <select ref={statusRef}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea placeholder="Fish Desc" ref={descRef}></textarea>
      <input type="text" placeholder="Fish Image" ref={imageRef} />
      <button type="submit">&larr; Add Item &rarr;</button>
    </form>
  );
}

export default AddFishForm;
