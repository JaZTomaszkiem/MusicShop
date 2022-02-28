import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGuitars, createAllGuitars, deleteGuitar, updateGuitar } from '../actions/guitars';
import { useForm } from 'react-hook-form';
const Home = () => {
  const dispatch = useDispatch();
  const [guitarId, setGuitarId] = useState('');
  const [name, setName] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [price, setPrice] = useState('');
  const [updatePrice, setUpdatePrice] = useState('');
  const allGuitars = useSelector(state => state.ItemReducer);

  useEffect(() => {
    dispatch(getAllGuitars());
  }, [dispatch]);
  const handleCreate = e => {
    e.preventDefault();
    dispatch(
      createAllGuitars({
        name: name,
        price: price,
      }),
    );
  };

  const handleGet = () => {
    dispatch(getAllGuitars());
  };

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteGuitar(guitarId));
  };

  const handleUpdate = e => {
    dispatch(updateGuitar(guitarId, updateName, updatePrice));
  };

  const { handleSubmit, register, errors } = useForm();

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          ref={register()}
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          price="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button onClick={handleCreate}>Add</button>
      </form>
      <form onSubmit={handleDelete}>
        <label>Delete</label>
        <button type="submit">Delete</button>
        <input onChange={e => setGuitarId(e.target.value)} value={guitarId} />
      </form>
      <form>
        <label htmlFor="updateName">Id</label>
        <input
          id="id"
          type="text"
          name="id"
          value={guitarId}
          onChange={e => setGuitarId(e.target.value)}
        />
        <label htmlFor="updatePrice">Change Name</label>
        <input
          id="updateName"
          type="text"
          name="updateName"
          value={updateName}
          onChange={e => setUpdateName(e.target.value)}
        />
        <label htmlFor="updateName">Change Price</label>
        <input
          name="updatePrice"
          type="text"
          price="price"
          value={updatePrice}
          onChange={e => setUpdatePrice(e.target.value)}
        />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
      <button onClick={handleGet}>Get All</button>
      {allGuitars.map(guitar => (
        <li key={guitar._id}>{`nazwa: ${guitar.name} cena: ${guitar.price}`}</li>
      ))}
    </>
  );
};

export default Home;
