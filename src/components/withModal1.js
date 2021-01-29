import React from "react";

const withModal = (WrappedComponent) => {
  class WithModal extends React.Component {
    constructor({
      // todosData,
      displayThemeMenu,
      setDisplayThemeMenu,
      displayModalWindow,
      setDisplayModalWindow,
    }) {
      // console.log(todosData, 1);
      super();
      this.state = {
        displayThemeMenu,
        setDisplayThemeMenu,
        displayModalWindow,
        setDisplayModalWindow,
        modalBackgroundColor: "",
        modalTextColor: "",
        currentModalWindow: "",
        check: "hello",
        // todosData: todosData,
      };
    }

    displayThemeMenuToggle = (displayThemeMenu) => {
      this.setState({ displayThemeMenu });
      this.state.setDisplayThemeMenu({ displayThemeMenu });
    };

    displayModalWindowToggle = (displayModalWindow) =>
      this.state.setDisplayModalWindow({ displayModalWindow });

    modalBackgroundColorHandler = (modalBackgroundColor) =>
      this.setState({ modalBackgroundColor });

    modalTextColorHandler = (modalTextColor) =>
      this.setState({ modalTextColor });

    currentModalWindowHandler = (currentModalWindow) =>
      this.setState({ currentModalWindow });
    render() {
      console.log(this.state.displayThemeMenu, "withModal2");
      console.log(this.state.displayModalWindow,"withModal2")
      return (
        <WrappedComponent
          displayThemeMenu={this.state.displayThemeMenu}
          displayModalWindow={this.state.displayModalWindow}
          setDisplayThemeMenu={this.state.setDisplayThemeMenu}
          setDisplayModalWindow={this.state.setDisplayModalWindow}
          displayThemeMenuToggle={this.displayThemeMenuToggle}
          displayModalWindowToggle={this.displayModalWindowToggle}
          // modalBackgroundColorHandler={this.modalBackgroundColorHandler}
          // modalTextColorHandler={this.modalTextColorHandler}
          // currentModalWindowHandler={this.currentModalWindowHandler}
          // {...this.props}
          check={this.state.check}
        />
      );
    }
  }
  return WithModal;
};

export default withModal;
