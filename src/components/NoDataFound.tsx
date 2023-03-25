import React from "react";
import { Image, View } from "react-native";
import AppImages from "../assets/images/noDataFound.jpeg";
import NoDataFoundStyle from '../assets/style/noDataFound';

const NoDataFound = () => (
  <View style={NoDataFoundStyle.container}>
    <Image
      style={NoDataFoundStyle.image}
      source={
        AppImages
      }
    />
  </View>
)

export default NoDataFound
