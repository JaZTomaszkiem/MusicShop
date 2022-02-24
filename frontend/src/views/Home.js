import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllGuitars, createAllGuitars } from '../actions/guitars';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGuitars());
  }, [dispatch]);

  const handleCreate = () => {
    dispatch(
      createAllGuitars({
        name: 'Ibanez 3000',
        price: '500',
      }),
    );
  };

  const handleGet = () => {
    dispatch(getAllGuitars());
  };

  return (
    <>
      <button onClick={handleCreate}>Add</button>
      <button onClick={handleGet}>Get All</button>
    </>
  );
};

export default Home;
