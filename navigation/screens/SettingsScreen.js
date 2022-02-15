import { View, Text } from "react-native";
import React from "react";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontWeight: "bold", fontSize: 26 }}
      >
        Settings Screen
      </Text>
    </View>
  );
}
