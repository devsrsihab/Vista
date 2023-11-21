import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <h2>SR.Sihab</h2>
            </NavLink>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/login"}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/register"}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              <h2>SR.Sihab</h2>
            </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
