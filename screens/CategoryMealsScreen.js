import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealScreen = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The CategoryMealScreen Screen</Text>
            <Text>{ selectedCategory.title }</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate({
                        routeName: 'CategoryMeals'
                    })
                }}
            />
            <Button
                title="Go Back"
                onPress={() => {
                    // navigation.goBack();
                    navigation.pop();
                }}
            />
        </View>
    );
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;
