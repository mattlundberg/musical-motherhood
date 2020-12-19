import React from "react";
import Home from "./Home";
import TopNav from "../components/Navigation/TopNavigation";

import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";

class Main extends React.Component {
  state = { activeKey: "Home" };

  // Used for data loading
  componentDidMount() {}

  // Use to handle conditional logic
  renderContent() {}

  updateActiveKey = (newActiveKey) => {
    console.log(newActiveKey);
    this.setState({ activeKey: newActiveKey });
  };

  render() {
    return (
      <div className="ui" style={{ backgroundColor: "white" }}>
        <div className="ui container">
          <TopNav
            activeKey={this.state.activeKey}
            onNavClick={this.updateActiveKey}
          />
          <Home />
        </div>
      </div>
    );
  }
}

export default Main;
