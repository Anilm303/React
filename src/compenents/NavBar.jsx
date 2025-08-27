import { use, useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { logoutsucess } from "../redux/AuthSlice";

const Navbar = () => {
  const { count } = useContext(CounterContext);

  const dispatch = useDispatch()

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  

  const logout = () =>{
    dispatch(logoutsucess())
  }
  return (
    <div className="border-b border-slate-500 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold">Logo</div>

        <nav>
          <ul className="flex gap-10 text-lg font-semibold items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/products">
              <li>products</li>
            </Link>
            <Link to="/cart">
              <li>Cart ({count})</li>
            </Link>
            <Link to="/login">
              <li></li>
            </Link>
            <Link to="/login">
            <li>
              <button>login</button>
            </li>
            </Link>

            {isAuthenticated ? (
              <>
              <li>{user}</li>
              <li>
                <button onClick={logout}>
                  logout
                </button>
              </li>
              </>
            ) : (
              <>
                <li>
                  <button className="border border-slate-600 px-4 py-2 rounded-md">
                    register
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
