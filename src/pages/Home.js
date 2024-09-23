import Search from '../components/Search/Search';
import HomeGrid from '../components/HomeGrid/HomeGrid';

const Home = (props) => {
  return (
    <>
      <Search history={props.history} />
      <HomeGrid />
    </>
  );
};

export default Home;
