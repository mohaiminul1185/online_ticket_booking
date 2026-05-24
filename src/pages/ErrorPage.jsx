import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-red-500 mb-5">
          404
        </h1>

        <h2 className="text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Sorry, this page does not exist.
        </p>

        <Link to="/">
          <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl font-semibold">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;