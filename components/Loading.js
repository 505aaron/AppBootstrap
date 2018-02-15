import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Loading extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default Loading;
