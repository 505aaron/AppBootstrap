import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import configureStore from "./configureStore";
import { Bootstrap } from "./containers";
import { Loading} from "./components";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Bootstrap loading={<Loading />}>
          <View style={styles.container}>
            <Text>Your App is bootstrapped!</Text>
          </View>
        </Bootstrap>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
