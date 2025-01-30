import EquipCard from "../components/EquipCard";
import { useContext } from "react";
import { DataContext } from "../layout/Root";

const Home = () => {
  const { data } = useContext(DataContext)
  // console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((sport,index) => (
          <EquipCard key={index} sport={sport} />
        ))}
      </div>
      
    </div>
  );
};

export default Home;