import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FiltersScreen = () => {
    return (
        <View styles={styles.screen}>
            <Text>The FiltersScreen Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FiltersScreen;
