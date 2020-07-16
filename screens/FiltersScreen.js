import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

const FilterSwitch = ({ state, onChange, label }) => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText>{label}</DefaultText>
            <Switch
                value={state}
                trackColor={{true: Colors.primaryColor}}
                thumbColor={Colors.primaryColor}
                onValueChange={newValue => onChange(newValue)}
            />
        </View>
    );
};

const FiltersScreen = ({ navigation }) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian
        };

        console.log(appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                state={isGlutenFree}
                onChange={setIsGlutenFree}
                label="Gluten-free"
            />
            <FilterSwitch
                state={isLactoseFree}
                onChange={setIsLactoseFree}
                label="Lactose-free"
            />
            <FilterSwitch
                state={isVegan}
                onChange={setIsVegan}
                label="Vegan"
            />
            <FilterSwitch
                state={isVegetarian}
                onChange={setIsVegetarian}
                label="Vegetarian"
            />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'roboto-slab',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center',
        width: '80%'
    }
});

export default FiltersScreen;
