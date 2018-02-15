import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class BootstrapSwitch extends Component {
  static propTypes = {
    bootstrapComplete: PropTypes.bool,
    initializeApp: PropTypes.func.isRequired,
    loading: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    bootstrapComplete: false
  };

  componentDidMount() {
    const { initializeApp } = this.props;

    initializeApp();
  }

  render() {
    const { bootstrapComplete, loading, children } = this.props;

    if (bootstrapComplete === true) {
      return <View style={styles.container}>{children}</View>;
    }

    return <View style={styles.container}>{loading}</View>;
  }
}

export default BootstrapSwitch;
