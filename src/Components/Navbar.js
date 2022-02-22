// import React from "react";
// import "./styles.css";
// import{DiGithubBadge} from "react-icons/di";
// function Navbar(props){
//     return(
//         <div>
//                 <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
//     <a className="navbar-brand">
//      <DiGithubBadge size={30}/>
//     </a>
//   <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             {props.toggle}
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li><a className="dropdown-item">Features</a></li>
//           <li><a className="dropdown-item">Mobile</a></li>
//             <li><a className="dropdown-item">Actions</a></li>
//             <li><a className="dropdown-item">CodeSpaces</a></li>
//             <li><a className="dropdown-item">Packages</a></li>
//             <li><a className="dropdown-item">Security</a></li>
//             <li><a className="dropdown-item">Code Reviews</a></li>
//             <li><a className="dropdown-item">Issues</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Github Sponspors</a></li>
//             <li><a className="dropdown-item" href="#">Customer Stories</a></li>
//           </ul>
//         </li>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Team</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link">Enterprise</a>
//         </li>
//         </div>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             {props.toggle2}
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li><a className="dropdown-item">Explore Github</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item">Learn and Contribute</a></li>
//             <li><a className="dropdown-item">Topics</a></li>
//             <li><a className="dropdown-item">Collection</a></li>
//             <li><a className="dropdown-item">Trending</a></li>
//             <li><a className="dropdown-item">Learning Lab</a></li>
//             <li><a className="dropdown-item">Open Source Guides</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item">Connect With Others</a></li>
//             <li><a className="dropdown-item">The Readme Project</a></li>
//             <li><a className="dropdown-item">Collection</a></li>
//             <li><a className="dropdown-item">Events</a></li>
//             <li><a className="dropdown-item">Community Forum</a></li>
//             <li><a className="dropdown-item">Github Education</a></li>
//             <li><a className="dropdown-item">Github Start Program</a></li>
//           </ul>
//           </li>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page">Marketplace</a>
//         </li>
//         </div>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             {props.toggle3}
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li><a className="dropdown-item">Plans</a></li>
//           <li><a className="dropdown-item">Compare Plans</a></li>
//             <li><a className="dropdown-item">Contact Sales</a></li>
//             <li><a className="dropdown-item">CodeSpaces</a></li>
//             <li><a className="dropdown-item">Packages</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Education</a></li>
//           </ul>
//         </li> 
//         <div className="nav-searchBar">
//     <form className="d-flex">
//       <input className="form-control me-2 bg-dark " type="search" placeholder="Search" aria-label="Search" />
//     </form>
//   </div>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
//         <li className="nav-item nav-signIn">
//           <a className="nav-link active" aria-current="page" href="#">Sign in</a>
//         </li>
//         <form className="d-flex">
//         <button className="btn btn-outline-light nav-btn" type="submit">Sign up</button>
//       </form>
//         </div>
// </nav>
//         </div>

//     );
// }
// export default Navbar;