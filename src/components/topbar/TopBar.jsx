import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              about
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              contact
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              write
            </Link>
          </li>
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              logout
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              src={
                user.profilePic ||
                "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
              }
              alt="profile"
              className="topImg"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                login
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
