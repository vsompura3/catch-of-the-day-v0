import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFunName } from '../helpers';

function StorePicker() {
  const inputRef = useRef('');
  const navigate = useNavigate();

  const goToStore = e => {
    e.preventDefault();
    console.log('You changed the URL');
    const storeID = inputRef.current.value;
    navigate(`/store/${storeID}`);
  };

  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please, Enter a store</h2>
      <input
        type="text"
        placeholder="Store Name"
        // defaultValue={getFunName()}
        defaultValue="elegant-adorable-elves"
        ref={inputRef}
        required
      />
      <button type="submit">Visit Store &rarr;</button>
    </form>
  );
}

export default StorePicker;
