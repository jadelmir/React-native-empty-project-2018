import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { View } from "react-native";
import React from "react";
import MainScreen from "../components/MainScreen";
// import ProfileScreen from "../components/ProfileScreen";
import LoginScreen from "screens/login/";
import PlanScreen from "screens/Tabs/Plans";
import AddPlanScreen from "screens/Tabs/Plans/AddPlan/";
import AttendanceScreen from "screens/Tabs/Attendance";
import ClientsScreen from "screens/Tabs/Clients";
import ProfileScreen from "screens/Tabs/Profile";

export const PlanTab = createStackNavigator(
  {
    Plan: PlanScreen,
    addPlan: AddPlanScreen
  },
  {
    mode: "modal"
  }
);
export const AttendanceTab = createStackNavigator({
  Attendance: AttendanceScreen
});
export const ClientsTab = createStackNavigator({
  Clients: {
    screen: ClientsScreen,
    navigationOptions: () => ({
      headerLeft: null,
      header: null
    })
  }
});
export const ProfileTab = createStackNavigator({
  Profile: ProfileScreen
});

export const MainTab = createBottomTabNavigator({
  Plan: PlanTab,
  Attendance: AttendanceTab,
  Clients: ClientsTab,
  Profile: ProfileTab
});

export const RootNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Main: {
    screen: MainTab,
    navigationOptions: () => ({
      headerLeft: null,
      header: null
    })
  }
});
