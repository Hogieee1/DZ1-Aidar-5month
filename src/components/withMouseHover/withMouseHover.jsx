import React, { Component } from "react";

function withMouseHover(Component) {
  return class extends React.Component {
    state = {
      isHovering: false,
      x: 0,
      y: 0
    };

    handleMouseEnter = event => {
      this.setState({ isHovering: true });
    };

    handleMouseLeave = event => {
      this.setState({ isHovering: false });
    };

    handleMouseMove = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };

    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
        >
          <Component {...this.props} {...this.state} />
        </div>
      );
    }
  };
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Header</h1>
        <p>
          Mouse is hovering: {this.props.isHovering ? "Yes" : "No"}, Position: ({this.props.x}, {this.props.y})
        </p>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h1>Footer</h1>
        <p>
          Mouse is hovering: {this.props.isHovering ? "Yes" : "No"}, Position: ({this.props.x}, {this.props.y})
        </p>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Main</h1>
        <p>
          Mouse is hovering: {this.props.isHovering ? "Yes" : "No"}, Position: ({this.props.x}, {this.props.y})
        </p>
      </div>
    );
  }
}

const HeaderWithMouseHover = withMouseHover(Header);
const FooterWithMouseHover = withMouseHover(Footer);
const MainWithMouseHover = withMouseHover(Main);

export { HeaderWithMouseHover, FooterWithMouseHover, MainWithMouseHover };
