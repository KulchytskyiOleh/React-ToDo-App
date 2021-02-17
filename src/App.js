import React, { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import ThemeContext, { themes } from "./components/Header/theme-context";

function App({ todosData, contacts, Categories, month }) {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} setTheme={setTheme} />
      <Content
        setTheme={setTheme}
        className="content"
        todosData={todosData}
        Categories={Categories}
        month={month}
      />
      <Footer contacts={contacts} />
    </ThemeContext.Provider>
  );
}
export default App;
