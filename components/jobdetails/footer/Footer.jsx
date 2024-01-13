import React from "react";
import { View, Text, TouchanleOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
        <Text style={styles.applyBtnText}>Apply for jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
