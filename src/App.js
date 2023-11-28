import React, { PureComponent } from "react";
import AppRoutes from "./AppRoutes";
import preloader from "../src/components/images/preloader.gif";

import "./App.css";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const timeout = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);

    return () => clearTimeout(timeout);
  }

  render() {
    console.log(this.state.isLoading);
    return (
      <>
        {this.state.isLoading ? (
          <div class="preloader_content">
            <img src={preloader} alt="preloader" class="preloader_gif" />
          </div>
        ) : (
          <AppRoutes />
        )}
      </>
    );
  }
}

export default App;
