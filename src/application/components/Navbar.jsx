import React from "react";
import { Button } from 'antd';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserLogout } from "../../authentication/fetchUserAuth";
import { logoutSuccess } from "../../authentication/redux/userAuthActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    fetchUserLogout();
    dispatch(logoutSuccess());
  };
  return (
    <ul>
      <li>
      <div className="App">
        <Button type="primary"><Link to="/">Primary button</Link></Button>
      </div>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
  );
};

export default Navbar;
