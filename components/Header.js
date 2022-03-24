import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 18,
    fontWeight: "600",
  },
});
