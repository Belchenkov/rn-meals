import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                onSelectMeal={() => {
                    navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    });
                }}
                itemData={itemData.item}
            />
        )
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;