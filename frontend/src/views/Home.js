import { useEffect } from 'react';
import * as api from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGuitars, createAllGuitars } from '../actions/guitars';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('dupa');
    dispatch(getAllGuitars());
  }, [dispatch]);

  const handleCreate = () => {
    console.log('chuj');
    dispatch(
      createAllGuitars({
        name: 'Ibanez 3000',
        producent: 'Ibanez',
        price: 'kurwa milion',
        img: '',
        kolor: 'black',
      }),
      [dispatch],
    );
  };

  return <button onClick={handleCreate}>click me</button>;
};

export default Home;
