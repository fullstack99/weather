import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import WeatherDetailComponent from "../../components/Details";

const WeatherDetails = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.daily || []}
        renderItem={({ item }) => (
          <WeatherDetailComponent data={item} type="week" />
        )}
        keyExtractor={(item, index) => `daily${index}`}
        ListHeaderComponent={
          <>
            <WeatherDetailComponent data={data.current} type="day" />
            {data.daily?.length > 0 && (
              <Text style={styles.txt}>8-day forecast</Text>
            )}
          </>
        }
        style={styles.flatList}
      />
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  flatList: {
    paddingHorizontal: 24,
  },
});
