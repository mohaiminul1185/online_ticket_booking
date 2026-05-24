import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-red-400 font-semibold"
            : "hover:text-red-400 transition"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/allTickets"
        className={({ isActive }) =>
          isActive
            ? "text-red-400 font-semibold"
            : "hover:text-red-400 transition"
        }
      >
        All Tickets
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "text-red-400 font-semibold"
            : "hover:text-red-400 transition"
        }
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* logo */}
          <Link to="/">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Ticket<span className="text-red-500">Bari</span>
            </h1>
          </Link>

          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-lg">
            {navLinks}

            {user ? (
              <>
                <p className="text-sm text-gray-300">
                  {user?.email}
                </p>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-red-400 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-5 text-center text-lg bg-black">
            {navLinks}

            {user ? (
              <>
                <p className="text-gray-300 text-sm">
                  {user?.email}
                </p>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-red-400 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;