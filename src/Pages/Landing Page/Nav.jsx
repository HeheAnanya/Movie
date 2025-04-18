import React from "react";
import './Nav.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <h1 className="logo">Movie</h1>
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-list-item active">Home</li>
              <li className="menu-list-item">Movies</li>

              <li className="menu-list-item">Trends</li>
            </ul>
          </div>
          <div className="profile-container">
            <img className="profile-picture" src="https://static-00.iconduck.com/assets.00/user-female-icon-1488x2048-6bjwjktq.png" alt="profile" />
            <div className="profile-text-container">
              <span className="profile-text">Profile</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <i className="left-menu-icon fas fa-search"></i>
        <i className="left-menu-icon fas fa-home"></i>
        <i className="left-menu-icon fas fa-users"></i>
        <i className="left-menu-icon fas fa-bookmark"></i>
        <i className="left-menu-icon fas fa-tv"></i>
        <i className="left-menu-icon fas fa-hourglass-start"></i>
        <i className="left-menu-icon fas fa-shopping-cart"></i>
      </div>
    </>
  );

/* //   const sliderRef = useRef(null);
//   const categories = ["English", "Hindi", "Trending", "Comedy", "Action", "Romance", "Horror", "Sci-Fi"];

//   // Function to scroll
//   const scroll = (direction) => { */
/* //     if (sliderRef.current) { */
//       const scrollAmount = 150; // Adjust scrolling amount
//       sliderRef.current.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="slider-container">
//       <button onClick={() => scroll("left")} className="nav-btn">❮</button>
//       <div className="category-slider" ref={sliderRef}>
//         {categories.map((category, index) => (
//           <div key={index} className="category">{category}</div>
//         ))}
//       </div>
//       <button onClick={() => scroll("right")} className="nav-btn">❯</button>
//     </div>
//   );
// };

// export default CategorySlider;
