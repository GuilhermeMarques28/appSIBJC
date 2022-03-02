import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Projetos from "../pages/Projetos";
import Programações from "../pages/Programações";
import CustomDrawer from "../components/CustomDrawer";
const Drawer = createDrawerNavigator();
import { Ionicons } from "@expo/vector-icons";

const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#FFF",
        },
        drawerActiveBackgroundColor: "#121212",
        drawerInactiveBackgroundColor: "#121212",
        drawerActiveTintColor: "#FFF",
        drawerInactiveTintColor: "#FFF",
      }}
    >
      <Drawer.Screen
        name="Projetos"
        component={Projetos}
        options={{
          title: "Projetos",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "ios-cube" : "ios-cube-outline"}
              size={30}
              color={color}
            />
          ),
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Programações"
        component={Programações}
        options={{
          title: "Programações",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={30}
              color={color}
            />
          ),
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: "bold",
          },
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Routes;
