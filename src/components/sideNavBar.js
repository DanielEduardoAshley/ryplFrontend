import React, { Component } from "react";
import "../containers/style/category.css";

class SideNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: [
        "Sport",
        "News",
        "Politics",
        "Tech",
        "Culture",
        "Music",
        "Comedy",
        "Family",
        "Science"
      ]
    };
  }

  render() {
    return (
      <div className="col-2 menu">
        <header class="header" role="banner">
          <div class="nav-wrap">
            <nav class="main-nav" role="navigation">
              <ul class="unstyled list-hover-slide">
                {this.state.categoryList.map((cat, idx) => {
                  return (
                    <li>
                      <a type={idx} onClick={this.changeCategory}>
                        {" "}
                        {cat}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default SideNavBar;
