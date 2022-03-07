import React from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllGuitars,
  createAllGuitars,
  deleteGuitar,
  updateGuitar,
} from 'store/action-creators';
import { State } from 'types/redux/Redux';
import { useForm } from 'react-hook-form';
import { Guitar } from 'types/Guitars';

const Admin = () => {
  const dispatch = useDispatch();

  const allGuitars = useSelector((state: State) => state.guitars);

  const { register, handleSubmit } = useForm();
  const { register: registerDelete, handleSubmit: handleSubmitDelete } =
    useForm();

  useEffect(() => {
    dispatch(getAllGuitars());
  }, [dispatch]);
  const handleCreate = (data) => {
    dispatch(createAllGuitars(data));
  };

  const handleGet = () => {
    dispatch(getAllGuitars());
  };

  const handleDelete = (data) => {
    dispatch(deleteGuitar(data));
  };

  const handleUpdate = (data) => {
    dispatch(updateGuitar(data.updateId, data.updateName, data.updatePrice));
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleCreate)}>
        <label htmlFor='name'>Name</label>
        <Input {...register('name')} id='name' type='text' />
        <label htmlFor='price'>Price</label>
        <Input {...register('price')} id='price' type='number' />
        <Button variant='outlined' type='submit'>
          Create
        </Button>
      </form>

      <form onSubmit={handleSubmitDelete(handleDelete)}>
        <label>Delete</label>
        <Button type='submit'>Delete</Button>
        <Input {...registerDelete('id')} />
      </form>

      <form onSubmit={handleSubmit(handleGet)}>
        <Button onClick={handleGet}>Get All</Button>
      </form>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <label htmlFor='updateId'>Id</label>
        <Input {...register('updateId')} id='updateId' type='text' />
        <label htmlFor='updateName'>Change Name</label>
        <Input {...register('updateName')} id='updateName' type='text' />
        <label htmlFor='updatePrice'>Change Price</label>
        <Input {...register('updatePrice')} id='updatePrice' type='text' />
        <Button type='submit'>Update</Button>
      </form>

      {allGuitars.map((guitar: Guitar) => (
        <li key={guitar._id}>
          {`nazwa: ${guitar.name} cena: ${guitar.price} id: ${guitar._id} `}
          <Button onClick={() => handleDelete({ id: guitar._id })}>
            delete
          </Button>
        </li>
      ))}
    </>
  );
};

export default Admin;
