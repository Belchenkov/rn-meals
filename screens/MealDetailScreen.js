import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from "react-redux";

import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = ({ children }) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{ children }</DefaultText>
        </View>
    )
};

const MealDetailScreen = ({ navigation }) => {
    const mealId = navigation.getParam('mealId');
    const meals = useSelector(state => state.meals.meals);

    const selectedMeal = meals.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}
            />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            { selectedMeal.ingredients.map(ingredient => (
                <ListItem key={ingredient}>{ ingredient }</ListItem>
            )) }
            <Text style={styles.title}>Steps</Text>
            { selectedMeal.steps.map(step => (
                <ListItem key={step}>{ step }</ListItem>
            )) }
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
                title='Favorite'
                iconName='ios-star'
                onPress={() => {}}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'roboto-slab-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10

    }
});

export default MealDetailScreen;
