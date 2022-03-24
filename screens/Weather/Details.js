import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import WeatherDetailComponent from "../../components/Details";

const WeatherDetails = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <View style={styles.container}>
      <WeatherDetailComponent data={data.current} type="day" />
      {data.daily?.length > 0 && (
        <View style={styles.week}>
          <Text style={styles.txt}>8-day forecast</Text>
        </View>
      )}
      <FlatList
        data={data.daily || []}
        renderItem={({ item, index }) => (
          <WeatherDetailComponent data={item} type="week" />
        )}
        keyExtractor={(item, index) => `daily${index}`}
      />
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  txt: {
    fontSize: 18,
    fontWeight: "600",
  },
  week: {
    paddingVertical: 20,
    backgroundColor: "#ffffff",
  },
});
