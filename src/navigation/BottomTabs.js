import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from "../screens/home";
import Search from "../screens/search";
import Favorites from "../screens/favorites";
import Settings from "../screens/settings";
import Context from "../context";

const Tab = createBottomTabNavigator();

export default () => {
  const {
    theme,
    state: { settingsApplication },
  } = useContext(Context);

  const language = settingsApplication.selectedLanguage;
  const homeTitle = settingsApplication.home.titleScreen[language];
  const searchTitle = settingsApplication.search.titleScreen[language];
  const favoritesTitle = settingsApplication.favorites.titleScreen[language];
  const settingsTitle = settingsApplication.settings.titleScreen[language];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { color: theme.primaryTextColor },
        headerStyle: {
          backgroundColor: theme.primaryBackgroundColor,
        },
        tabBarStyle: {
          height: 50,
          backgroundColor: theme.primaryBackgroundColor,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: "Roboto-Bold",
            color: theme.primaryTextColor,
          },
          headerTitle: homeTitle,
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="home"
              size={30}
              color={
                focused ? theme.primaryButtonColor : theme.secondaryButtonColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: "Roboto-Bold",
            color: theme.primaryTextColor,
          },
          headerTitle: searchTitle,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={30}
              color={
                focused ? theme.primaryButtonColor : theme.secondaryButtonColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: "Roboto-Bold",
            color: theme.primaryTextColor,
          },
          headerTitle: favoritesTitle,
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="heart"
              size={30}
              color={
                focused ? theme.primaryButtonColor : theme.secondaryButtonColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: "Roboto-Bold",
            color: theme.primaryTextColor,
          },
          headerTitle: settingsTitle,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              size={30}
              color={
                focused ? theme.primaryButtonColor : theme.secondaryButtonColor
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
