import { View, Text } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert("This is Home Screen")}
        style={{ fontWeight: "bold", fontSize: 26 }}
      >
        HomeScreen
      </Text>
    </View>
  );
}
