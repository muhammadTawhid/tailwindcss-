import React from "react";
import { Link } from "react-router-dom";
import Body from "../Body/Body";

const Navbar = () => {
    return (
        <nav className="">
      <div className="px-14">
        <a className="" href="/home">
          <h4 style={{ fontSize: "2rem" }}>
            <b>ELESSI</b>
          </h4>
        </a>

        <button
          className=""
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""></span>
        </button>
        <div className="float-right" id="">
          <ul className="">
            <li className="float-right mr-3">
              <Link className="" aria-current="page" to="/">
                <b>Collection</b>
              </Link>
            </li>
            <li className="float-right mr-7">
              <Link className="" aria-current="page" to="/">
                <b> Contact</b>
              </Link>
            </li>
            <li className="float-right mr-7">
              <Link className="" aria-current="page" to="/">
                <b>Customer</b>
              </Link>
            </li>
            <li className="float-right mr-7">
              <Link className="" aria-current="page" to="/">
                <b>Cycle</b>
              </Link>
            </li>
            <li className="float-right mr-7">
              <Link className="" aria-current="page" to="/login">
                <b>Home</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <Body />
      </div>
    </nav>
    );
};

export default Navbar;
























// import React from "react";
// import { Link } from "react-router-dom";
// import Body from "../Body/Body";

// const Navbar = () => {
//   return (
//     <nav className="">
//       <div className="px-14">
//         <a className="" href="/home">
//           <h4 style={{ fontSize: "2rem" }}>
//             <b>ELESSI</b>
//           </h4>
//         </a>

//         <button
//           className=""
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className=""></span>
//         </button>
//         <div className="float-right" id="">
//           <ul className="">
//             <li className="float-right mr-3">
//               <Link className="" aria-current="page" to="/">
//                 <b>Collection</b>
//               </Link>
//             </li>
//             <li className="float-right mr-7">
//               <Link className="" aria-current="page" to="/">
//                 <b> Contact</b>
//               </Link>
//             </li>
//             <li className="float-right mr-7">
//               <Link className="" aria-current="page" to="/">
//                 <b>Customer</b>
//               </Link>
//             </li>
//             <li className="float-right mr-7">
//               <Link className="" aria-current="page" to="/">
//                 <b>Cycle</b>
//               </Link>
//             </li>
//             <li className="float-right mr-7">
//               <Link className="" aria-current="page" to="/login">
//                 <b>Home</b>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="mt-5">
//         <Body />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


