import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();

  return (
    <view>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Isomer</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
    </view>
  );
};

export default Welcome;
