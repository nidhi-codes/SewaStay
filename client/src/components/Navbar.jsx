import { IconButton } from "@mui/material";
import { Search, Person, Menu } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/state";


const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: variables.pinkred }}
            onClick={() => {navigate(`/properties/search/${search}`)}}
          />
        </IconButton>
      </div>

      <div className="navbar_right">
        {user ? (
          <a href="/create-listing" className="host">
            Start Rental Services
          </a>
        ) : (
          <a href="/login" className="host">
            Start Rental Services
          </a>
        )}

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={`http://localhost:3001/${user.profileImagePath.replace(
                "public",
                ""
              )}`}
              alt="profile photo"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
          <div className="navbar_right_accountmenu">
            <Link to={`/${user._id}/trips`}>Rentals History</Link>
            <Link to={`/${user._id}/wishList`}>Wish List</Link>
            <Link to={`/${user._id}/properties`}>Your Products for Rent</Link>
            <Link to={`/${user._id}/reservations`}>Other List</Link>
            <Link to="/create-listing">Start Renting</Link>

            <Link
              to="/login"
              onClick={() => {
                dispatch(setLogout());
              }}
            >
              Log Out
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import { IconButton } from "@mui/material";
// import { Search, Person, Menu } from "@mui/icons-material";
// import variables from "../styles/variables.scss";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import "../styles/Navbar.scss";
// import { Link, useNavigate } from "react-router-dom";
// import { setLogout } from "../redux/state";


// const Navbar = () => {
//   const [dropdownMenu, setDropdownMenu] = useState(false);

//   const user = useSelector((state) => state.user);

//   const dispatch = useDispatch();

//   const [search, setSearch] = useState("")

//   const navigate = useNavigate()

//   return (
//     <div className="navbar">
//       <a href="/">
//         <img src="/assets/logo.png" alt="logo" />
//       </a>

//       <div className="navbar_search">
//         <input
//           type="text"
//           placeholder="Search ..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <IconButton disabled={search === ""}>
//           <Search
//             sx={{ color: variables.pinkred }}
//             onClick={() => {navigate(/properties/search/${search})}}
//           />
//         </IconButton>
//       </div>

//       <div className="navbar_right">
//         {user ? (
//           <a href="/create-listing" className="host">
//             Become A Host
//           </a>
//         ) : (
//           <a href="/login" className="host">
//             Become A Host
//           </a>
//         )}

//         <button
//           className="navbar_right_account"
//           onClick={() => setDropdownMenu(!dropdownMenu)}
//         >
//           <Menu sx={{ color: variables.darkgrey }} />
//           {!user ? (
//             <Person sx={{ color: variables.darkgrey }} />
//           ) : (
//             <img
//               src={`http://localhost:3001/${user.profileImagePath.replace(
//                 "public",
//                 ""
//               )}`}
//               alt="profile photo"
//               style={{ objectFit: "cover", borderRadius: "50%" }}
//             />
//           )}
//         </button>

//         {dropdownMenu && !user && (
//           <div className="navbar_right_accountmenu">
//             <Link to="/login">Log In</Link>
//             <Link to="/register">Sign Up</Link>
//           </div>
//         )}

//         {dropdownMenu && user && (
//           <div className="navbar_right_accountmenu">
//             <Link to={/${user._id}/trips}>Trip List</Link>
//             <Link to={/${user._id}/wishList}>Wish List</Link>
//             <Link to={/${user._id}/properties}>Property List</Link>
//             <Link to={/${user._id}/reservations}>Reservation List</Link>
//             <Link to="/create-listing">Become A Host</Link>

//             <Link
//               to="/login"
//               onClick={() => {
//                 dispatch(setLogout());
//               }}
//             >
//               Log Out
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;