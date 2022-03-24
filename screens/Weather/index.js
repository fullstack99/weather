import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import WeatherDetails from "./Details";
import SelectPicker from "../../components/SelectPicker";
import LoadingBar from "../../components/Loading";
import { weatherActions } from "../../actions";
import Header from "../../components/Header";

const CITY_LIST = [
  {
    label: "Saskatoon, CA",
    value: "aaskatoon",
    coordinates: {
      lat: 52.1168,
      lon: -106.6345,
    },
  },
  {
    label: "London, GB",
    value: "london",
    coordinates: {
      lat: 51.5085,
      lon: -0.1257,
    },
  },
  {
    label: "Paris, FR",
    value: "paris",
    coordinates: {
      lat: 48.8534,
      lon: 2.3488,
    },
  },
];

const TIMES = [
  {
    label: "Today",
    value: "current",
  },
  {
    label: "This Week",
    value: "daily",
  },
];

const Weather = ({}) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const { loading, data } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherActions.clearStore());
  }, []);

  useEffect(() => {
    if (selectedCity && selectedTime) {
      const city = CITY_LIST.find((v) => v.value === selectedCity);
      let exclude = "minutely,hourly,daily";
      if (selectedTime == "daily") {
        exclude = "minutely,hourly";
      }
      dispatch(
        weatherActions.getWeatherRequest({
          coordinates: city.coordinates,
          exclude,
        })
      );
    }
  }, [selectedCity, selectedTime]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header title="Weather" />
        <View style={styles.item}>
          <SelectPicker
            items={CITY_LIST}
            onValueChange={(value) => setSelectedCity(value)}
            placeholder="Please select city..."
          />
        </View>
        <View style={styles.item}>
          <SelectPicker
            items={TIMES}
            onValueChange={(value) => setSelectedTime(value)}
            placeholder="Please select time"
          />
        </View>
      </View>
      <WeatherDetails data={data} />
      {loading && <LoadingBar />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    paddingHorizontal: 24,
  },
  item: {
    marginTop: 30,
  },
});

export default Weather;
