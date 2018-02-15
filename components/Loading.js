import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class Loading extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default Loading;
