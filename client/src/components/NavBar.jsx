import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = <>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/add-equips"}>Add Equipments</Link></li>
    <li><Link to={"/user-equips"}>My Equipments</Link></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">EquiSport</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ?
          <>
            <div className="btn btn-ghost">Welcome {user.displayName}</div>
            <button onClick={logOut} className="btn btn-warning">Logout</button>
          </>
          :
          <Link to={"/login"} className="btn btn-primary">Login</Link>
        }
      </div>
    </div>
  );
};

export default NavBar;