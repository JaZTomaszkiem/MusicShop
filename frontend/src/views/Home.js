import axios from 'axios';

const Home = () => {
  const handleClick = async () => {
    let test = await axios.get('http://localhost:5000/');
    console.log(test);
  };

  return <button onClick={handleClick}>click me</button>;
};

export default Home;
