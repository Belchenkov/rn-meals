import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ImageBackground
} from "react-native";

const MealItem = ({
                      onSelectMeal,
                      itemData: {
                          title,
                          duration,
                          complexity,
                          affordability,
                          imageUrl
                      }
}) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity
                onPress={onSelectMeal}
            >
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground
                            source={{uri: imageUrl}}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text
                                    style={styles.title}
                                    numberOfLines={2}
                                >{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{duration}m</Text>
                        <Text>{complexity.toUpperCase()}</Text>
                        <Text>{affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 10
    },
    mealRow: {
     flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, .6)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'roboto-slab-bold',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }
});

export default MealItem;