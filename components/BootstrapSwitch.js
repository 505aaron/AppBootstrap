import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

class BootstrapSwitch extends Component {
  static propTypes = {
    boostrapComplete: PropTypes.bool,
    loading: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    boostrapComplete: false
  };

  render() {
    const { boostrapComplete, loading, children } = this.props;

    if (boostrapComplete === true) {
      return <View>{children}</View>;
    }

    return <View>{loading}</View>;
  }
}

export default BootstrapSwitch;
