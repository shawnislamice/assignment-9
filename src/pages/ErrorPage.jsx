
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
      <div className="my-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title>404 Bad Request</title>
        </Helmet>
        <h1 className="text-5xl text-center font-bold">404 Bad Request</h1>
        <h3 className="text-2xl text-center md:my-4">
          The Page you are requesting is not avialable at the moment
        </h3>
        <div className="flex justify-center">
          <img src="bg.gif" alt="" />
        </div>
        <Link to='/' >
          <button className="btn bg-[#1DD100] text-white border-none outline-none mx-auto block">Go Home</button>
        </Link>
      </div>
    );
};

export default ErrorPage;