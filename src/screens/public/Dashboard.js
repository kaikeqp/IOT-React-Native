import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export const Dashboard = (props) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://noderedkaike.mybluemix.net/ui/#!/0?socketid=zj6vuIB0yjUz3GE7AAAX",
        }}
      />
    </View>
  );
};
