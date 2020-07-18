import React from 'react';
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const meals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryMealScreen;
