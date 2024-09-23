import MoviesGrid from '../components/MoviesGrid/MoviesGrid';


const Upcoming = (props) => {  
  return (
    <>
      <MoviesGrid sectionName="Upcoming" history={props.history}/>
    </>
  );
};

export default Upcoming;