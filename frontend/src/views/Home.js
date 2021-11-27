import axios from 'axios';

const Home = () => {
  const handleClick = () => {
    axios.get('localhost:5000/');
  };

  return <button onClick={handleClick}>click me</button>;
};

export default Home;
