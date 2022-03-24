import React from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { Fontisto } from "@expo/vector-icons";

const WeatherDetailComponent = ({ data, type }) => {
  const renderWeatherIcon = (value) => {
    console.log(11, value);
    if (value.includes("Clear")) {
      return (
        <Fontisto
          name="day-sunny"
          size={24}
          color="#ffd600"
          style={styles.icon}
        />
      );
    }
    if (value.includes("Cloud")) {
      return (
        <Fontisto name="cloudy" size={24} color="#42a5f5" style={styles.icon} />
      );
    }
    if (value.includes("Rain")) {
      return (
        <Fontisto name="rains" size={24} color="#37474f" style={styles.icon} />
      );
    }
    if (value.includes("Snow")) {
      return (
        <Fontisto
          name="snowflake"
          size={24}
          color="#4fc3f7"
          style={styles.icon}
        />
      );
    }
    <Fontisto name="day-sunny" size={24} color="#ffd600" style={styles.icon} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {type === "day" && (
          <Text style={[styles.secondaryTxt, styles.txtBold]}>Today: </Text>
        )}
        <Text style={[styles.secondaryTxt, styles.txtBold]}>
          {moment(data.dt * 1000).format("ddd MMM DD, hh:mm a")}
        </Text>
      </View>
      <View style={styles.row}>
        {renderWeatherIcon(data.weather[0].main)}
        <Text style={[styles.secondaryTxt, styles.txtBold]}>
          {type === "day" ? data.temp : data.temp.day}°C
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.primaryTxt, styles.txtBold]}>
          Feels like {type === "day" ? data.feels_like : data.feels_like.day}°C.{" "}
          {data.weather[0].description}.
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Fontisto name="wind" size={16} color="black" style={styles.icon} />
          <Text style={styles.primaryTxt}>{data.wind_speed}m/s E</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.primaryTxt}>{data.pressure}hPa</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.primaryTxt}>Humidity: {data.humidity}%</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.primaryTxt}>UV: {data.uvi}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.primaryTxt}>Dew point: {data.dew_point}°C</Text>
        </View>
        {data.visibility && (
          <View style={styles.item}>
            <Text style={styles.primaryTxt}>
              Visibility: {(data.visibility / 1000).toFixed(1)}km
            </Text>
          </View>
        )}
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.primaryTxt}>
            Sunrise: {moment(data.sunrise * 1000).format("hh:mm a")}
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.primaryTxt}>
            Sunset: {moment(data.sunset * 1000).format("hh:mm a")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetailComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  secondaryTxt: {
    fontSize: 18,
  },
  primaryTxt: {
    fontSize: 14,
  },
  txtBold: {
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  icon: {
    marginRight: 10,
  },
});
