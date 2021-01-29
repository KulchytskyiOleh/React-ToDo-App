import React, { useState } from "react";

const withModal = (WrappedComponent) => {
  function WithModal() {
    const [displayThemeMenu, setDisplayThemeMenu] = useState(false);
    const [displayModalWindow, setDisplayModalWindow] = useState(false);
    return (
      <WrappedComponent
        displayThemeMenu={displayThemeMenu}
        setDisplayThemeMenu={setDisplayThemeMenu}
        displayModalWindow={displayModalWindow}
        setDisplayModalWindow={setDisplayModalWindow}
      />
    );
  }
  return WithModal;
};

export default withModal;

// displayThemeMenuToggle = (displayThemeMenu) => {
//   this.setState({ displayThemeMenu });
//   this.state.setDisplayThemeMenu({ displayThemeMenu });
// };

// displayModalWindowToggle = (displayModalWindow) =>
//   this.state.setDisplayModalWindow({ displayModalWindow });

// modalBackgroundColorHandler = (modalBackgroundColor) =>
//   this.setState({ modalBackgroundColor });

// modalTextColorHandler = (modalTextColor) =>
//   this.setState({ modalTextColor });

// currentModalWindowHandler = (currentModalWindow) =>
//   this.setState({ currentModalWindow });
