import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";
const MainLayout = () => {
  const navigation = useNavigation();
  if(navigation.state=='loading'){
    return <Spinner></Spinner>
  }
  return (
    <div className="px-2  overflow-hidden">
      <div className="container mx-auto max-w-screen-xl ">
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Toaster></Toaster>
      </div>
      <div className="bg-[#131313]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
