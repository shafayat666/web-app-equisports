import { useLoaderData } from "react-router-dom";
import EquipCard from "../components/EquipCard";

const Home = () => {
  const sports = useLoaderData();
  // console.log(sports);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sports.map((sport,index) => (
          <EquipCard key={index} sport={sport} />
        ))}
      </div>
    </div>
  );
};

export default Home;