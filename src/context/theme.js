import React from "react";

const Theme = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
});

export default Theme;
