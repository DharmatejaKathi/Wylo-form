import { Component } from "react";

import CreatePost from "./components/CreatePost";
import Theme from "./context/theme";

import "./App.css";

class App extends Component {
  state = { isDarkTheme: false };

  onChangeTheme = () => {
    this.setState((prevState) => ({ isDarkTheme: !prevState.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <Theme.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <CreatePost />
      </Theme.Provider>
    );
  }
}

export default App;
