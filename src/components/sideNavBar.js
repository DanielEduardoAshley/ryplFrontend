import React, { Component } from "react";
import "../containers/style/category.css";
import { Link } from "react-router-dom";

class SideNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      categoryList: this.props.categoryList
    });
  }

  render() {
    return (
      <div className="sideNav-wrapper">
        <header className="header" role="banner">
          <div className="nav-wrap">
            <nav className="main-nav" role="navigation">
              <ul className="unstyled list-hover-slide">
                {" "}
                {this.state.categoryList.map((cat, i) => {
                  return (
                    <li
                      className="cat_item"
                      style={{
                        fontSize: "14px"
                      }}
                      key={i}
                      id={i}
                    >
                      <Link to={`/category/${cat.id}`}>
                        <div
                          id={cat.id}
                          onClick={e => this.props.clickedCategory(e)}
                        >
                          {cat.name}
                        </div>
                      </Link>{" "}
                    </li>
                  );
                })}{" "}
              </ul>{" "}
            </nav>{" "}
          </div>{" "}
        </header>{" "}
      </div>
    );
  }
}

export default SideNavBar;
