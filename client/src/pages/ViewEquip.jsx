import { useParams } from "react-router-dom";

const ViewEquip = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Id of the product is: {id}</h1>      
    </div>
  );
};

export default ViewEquip;