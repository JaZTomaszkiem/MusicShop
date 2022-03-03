import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGuitars, createAllGuitars, deleteGuitar, updateGuitar } from '../actions/guitars';
import { useForm } from 'react-hook-form';
const Home = () => {
  const dispatch = useDispatch();

  const allGuitars = useSelector(state => state.ItemReducer);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getAllGuitars());
  }, [dispatch]);
  const handleCreate = data => {
    dispatch(createAllGuitars(data));
  };

  const handleGet = () => {
    dispatch(getAllGuitars());
  };

  const handleDelete = data => {
    dispatch(deleteGuitar(data));
  };

  const handleUpdate = data => {
    dispatch(updateGuitar(data.updateId, data.updateName, data.updatePrice));
  };
  console.log(allGuitars);
  return (
    <>
      <form onSubmit={handleSubmit(handleCreate)}>
        <label htmlFor="name">Name</label>
        {/* <input {...register('name')} id="name" type="text" /> */}
        <Input {...register('name')} id="name" type="text" />
        <label htmlFor="price">Price</label>
        <input {...register('price')} id="price" type="number" />
        {/* <button type="submit">Add</button> */}
        <Button variant="outlined" type="submit">
          Create
        </Button>
      </form>

      <form onSubmit={handleSubmit(handleDelete)}>
        <label>Delete</label>
        <button type="submit">Delete</button>
        <input {...register('id')} />
      </form>

      <form onSubmit={handleSubmit(handleGet)}>
        <button onClick={handleGet}>Get All</button>
      </form>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <label htmlFor="updateId">Id</label>
        <input {...register('updateId')} id="updateId" type="text" />
        <label htmlFor="updateName">Change Name</label>
        <input {...register('updateName')} id="updateName" type="text" />
        <label htmlFor="updatePrice">Change Price</label>
        <input {...register('updatePrice')} id="updatePrice" type="text" />
        <button type="submit">Update</button>
      </form>

      {allGuitars.map(guitar => (
        <li key={guitar._id}>{`nazwa: ${guitar.name} cena: ${guitar.price}`}</li>
      ))}
    </>
  );
};

export default Home;
