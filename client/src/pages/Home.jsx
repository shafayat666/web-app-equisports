import { useLoaderData } from "react-router-dom";
import EquipCard from "../components/EquipCard";

const Home = () => {
  const sports = useLoaderData();
  console.log(sports);
  return (
    <div>
      <h1>This is the Home page.</h1>      
      <p>Sports length: {sports.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sports.map((sport,index) => (
          <EquipCard key={index} sport={sport} />
        ))}
      </div>
    </div>
  );
};

export default Home;