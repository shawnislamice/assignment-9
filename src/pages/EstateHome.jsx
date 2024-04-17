import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import EstateCard from "../components/EstateCard";
import banner from '../assets/estatebanner.webp'
import { Link } from "react-router-dom";

const EstateHome = () => {
  const { data } = useContext(AuthContext);
  return (
    <div className="">
      
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {data.slice(0, 3).map((item) => (
          <EstateCard key={item.id} item={item}></EstateCard>
        ))}
      </div>
      <Link to='/estate'>
        
        <button  className="btn block mx-auto my-4 md:my-6 btn-outline">
          Show ALL
        </button>
      </Link>
    </div>
  );
};

export default EstateHome;
