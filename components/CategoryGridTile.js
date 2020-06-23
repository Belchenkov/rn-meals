import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    TouchableNativeFeedback
} from "react-native";

const CategoryGridTile = ({ title, onSelect, color }) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={onSelect}
            >
                <View style={{
                    ...styles.container,
                    ...{ backgroundColor: color }
                }}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableCmp>
        </View>

    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        height: 150,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: .26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
    },
    title: {
        fontFamily: 'roboto-slab-bold',
        fontSize: 16,
        textAlign: 'right'
    }
});

export default CategoryGridTile;