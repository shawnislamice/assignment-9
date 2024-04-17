import { PropagateLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PropagateLoader color="#F00" />
    </div>
  );
};

export default Spinner;
