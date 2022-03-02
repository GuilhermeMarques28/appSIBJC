import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
      }}
    >
      <TouchableOpacity
        style={{ height: 70, alignItems: "center", flexDirection: "row" }}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="md-menu" size={35} color="#fff" />
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 37,
        }}
      >
        <Text style={{ fontSize: 23, color: "#FFF", fontWeight: "bold" }}>
          Nossos Projetos
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
