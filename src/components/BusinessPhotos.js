import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const BusinessPhotos = ({ business }) => {
    useEffect(() => {
        //console.log(business?.images[0]?.url)
    }, []);

    return (
        <View>
            <Text style={styles.heading}>BusinessPhotos</Text>
            <FlatList
                horizontal={true}
                data={business.images}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.url }}
                        style={styles.image}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        color: 'black',
        fontWeight: '700',
        marginBottom: 10,
    },
    image: {
        height: 120,
        width: 170,
        borderRadius: 20,
        marginRight: 10,
        marginBottom: 10,
    },
});

export default BusinessPhotos;
