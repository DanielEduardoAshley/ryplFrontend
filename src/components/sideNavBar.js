import React from "react";
import "../containers/style/category.css";

const SideNavBar = props => {
  return (
    <div className="col-2 menu">
      <header class="header" role="banner">
        <div class="nav-wrap">
          <nav class="main-nav" role="navigation">
            <ul class="unstyled list-hover-slide">
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Politics</a>
              </li>
              <li>
                <a href="#">Culture</a>
              </li>
              <li>
                <a href="#">Entertainment</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Comedy</a>
              </li>
              <li>
                <a href="#">Family</a>
              </li>
              <li>
                <a href="#">Science</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default SideNavBar;
