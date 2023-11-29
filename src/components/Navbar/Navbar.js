import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import "../styles/Navbar.css";

class Navbar extends PureComponent {
  constructor() {
    super();
    this.header_banner = React.createRef();
    this.header_info_banner = React.createRef();
    this.state = {
      languageChangerValue: "en",
      activeMenu: false,
    };
  }

  componentDidMount() {
    this.gsapBannerAnimation();
  }

  handleToggleBurgerMenu = () => {
    if (this.state.activeMenu === false) {
      this.setState({ activeMenu: true });
    } else {
      this.setState({ activeMenu: false });
    }
  }

  handleLanguageChange = (e) => {
    const selectedValue = e.target.value;

    this.setState({ languageChangerValue: selectedValue });
  };

  gsapBannerAnimation() {
    gsap.to(this.header_banner.current, {
      opacity: 1,
      width: "100%",
      x: 0,
      y: 0,
      height: "height: calc(100vh - 130px);",
      ease: "power3.out",
      duration: 1.5,
    });

    gsap.to(this.header_info_banner.current, {
      opacity: 1,
      x: 100,
      ease: "power3.out",
      duration: 1.3,
      delay: 1,
    });
  }

  render() {
    const { languageChangerValue } = this.state;
    console.log(languageChangerValue);
    return (
      <>
        <header>
          <nav>
            <Link to="/" class="logo"></Link>
            <div class={this.state.activeMenu ? "nav_list_container" : "nav_list_unActive"}>
              <ul class="nav_list">
                <Link to="/">
                  <li class="list_item">
                    HOTELS AND VILLAS <span class="icon_arrow"></span>
                    <div class="nav_hotels_menu">
                      <h1 class="nav_menu_title"> </h1>
                    </div>
                  </li>
                </Link>
                <Link to="/">
                  <li class="list_item">DINING</li>
                </Link>
                <Link to="/">
                  <li class="list_item">MEETINGS AND EVENTS</li>
                </Link>
                <Link to="/">
                  <li class="list_item">SPECIAL OFFERS</li>
                </Link>
                <Link to="/">
                  <li class="list_item">STORIES</li>
                </Link>
              </ul>
              <div class="nav_btns_check_language">
                <select
                  name="select"
                  class="nav_btn_language"
                  value={languageChangerValue}
                  aria-readonly
                >
                  <option
                    value="en"
                    class={languageChangerValue !== "ua" ? "unActive" : "lng"}
                  >
                    EN
                  </option>
                  <option
                    value="ua"
                    class={languageChangerValue !== "en" ? "unActive" : "lng"}
                  >
                    UA
                  </option>
                </select>
                <span class="nav_btn_checkin">ONLINE CHECK-IN</span>
              </div>
            </div>
            <div
              class="burger_menu"
              onClick={this.handleToggleBurgerMenu}
            >
              <span class="burger_item"></span>
              <span class="burger_item"></span>
              <span class="burger_item"></span>
            </div>
          </nav>
          <div class="header_banner">
            <div class="banner_container" ref={this.header_banner}>
              <div class="banner_info_block" ref={this.header_info_banner}>
                <span class="banner_top_info">ADRIATIC LUXURY HOTELS</span>
                <h1 class="banner_title">
                  MEETINGS &<br /> EVENT VENUES
                </h1>
                <p class="banner_info">CONTACT OUR EVENT PLANNER</p>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;
