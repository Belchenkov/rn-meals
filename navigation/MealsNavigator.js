import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

//import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        }
    },
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen
}, {
    mode: 'modal',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor: '',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
        headerTitle: 'A Screen'
    }
})

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);