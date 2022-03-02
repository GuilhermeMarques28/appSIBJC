import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons/";
import { Linking, ToastAndroid } from "react-native";

const openUrlInsta = async (url) => {
  if (await Linking.canOpenURL("https://www.instagram.com/sibjc_/")) {
    await Linking.openURL("https://www.instagram.com/sibjc_/");
  } else {
    ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
  }
};

const openUrlInsta4K = async (url) => {
  if (await Linking.canOpenURL("https://www.instagram.com/juventude4ksibjc/")) {
    await Linking.openURL("https://www.instagram.com/juventude4ksibjc/");
  } else {
    ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
  }
};

const openUrlFace = async (url) => {
  if (await Linking.canOpenURL("fb://page/385888254832912")) {
    await Linking.openURL("fb://page/385888254832912");
  } else {
    ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
  }
};

const index = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          marginTop: 15,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 77,
          marginBottom: 25,
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../assets/SIBJC.jpg")}
        />
      </View>
      <View
        style={{
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", fontStyle: "italic" }}>
          Seja bem vindo ao app da SIBJC
        </Text>
      </View>
      <DrawerItemList {...props} />
      <View
        style={{
          marginTop: 15,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "#121212",
          }}
        >
          Siga-nos em nossas redes socias
        </Text>
      </View>
      <DrawerItem
        icon={({ focused, size, color }) => (
          <Ionicons
            name={focused ? "md-logo-instragram" : "logo-instagram"}
            size={size}
            color="#FFF"
          />
        )}
        label="sibjc_"
        labelStyle={{
          fontSize: 18,
          color: "#FFF",
          fontWeight: "bold",
          fontStyle: "normal",
        }}
        style={{
          backgroundColor: "#131313",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        onPress={openUrlInsta}
      />
      <DrawerItem
        icon={({ focused, size, color }) => (
          <Ionicons
            name={focused ? "md-logo-instragram" : "logo-instagram"}
            size={size}
            color="#FFF"
          />
        )}
        label="juventude4ksibjc"
        labelStyle={{
          fontSize: 18,
          color: "#FFF",
          fontWeight: "bold",
          fontStyle: "normal",
        }}
        style={{
          backgroundColor: "#131313",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        onPress={openUrlInsta4K}
      />
      <DrawerItem
        icon={({ focused, size, color }) => (
          <Ionicons
            name={focused ? "logo-facebook" : "logo-facebook"}
            size={size}
            color="#FFF"
          />
        )}
        label="Segunda Igreja Batista em Jardim Catarina"
        labelStyle={{
          fontSize: 17,
          color: "#FFF",
          fontWeight: "bold",
          fontStyle: "normal",
        }}
        style={{
          backgroundColor: "#131313",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        onPress={openUrlFace}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            fontStyle: "italic",
            color: "#131313",
            textDecorationLine: "underline",
          }}
        >
          "Busquem o Senhor enquanto se pode achá-lo; clamem por ele enquanto
          está perto."
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 180,
            marginTop: -10,
          }}
        >
          <FontAwesome5 name="bible" size={15} color="#131313" />
          <Text
            style={{ fontStyle: "italic", fontWeight: "700", paddingLeft: 5 }}
          >
            Isaias 55:6
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Ionicons name="location" size={30} color="#121212" />
        <Text
          style={{
            fontSize: 17,
            marginTop: 10,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "#121212",
            paddingLeft: 5,
          }}
        >
          Endereço: Av. Albino Imparato, 2375. Em frente ao Posto de Gasolina da
          rua 39 - Jardim Catarina - SG
        </Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
