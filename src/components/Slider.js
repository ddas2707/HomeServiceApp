import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import GlobalApi from '../utils/GlobalApi';
import { FlatList } from 'react-native';

const Slider = () => {
    const [slider, setSlider] = useState();

    useEffect(() => {
        getSlider();
    }, [])
    const getSlider = () => {
        GlobalApi.getSlider().then(resp => {
            //console.log("resp", resp)//isse pata chalega ki barabar api chal rha h ki nhi
            setSlider(resp?.sliders)
        })
    }
    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.heading}>Offers For You</Text>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <Image
                                source={{ uri: item?.image?.url }}
                                style={styles.sliderImage}
                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    heading: {
        color: 'black',
        fontFamily: 'Outfit-Medium',//ye chalega jab custom fonts banega
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '600'
    },
    sliderImage: {
        height: 150,
        width: 270,
        borderRadius: 20,
        objectFit: 'fill',
        backgroundColor: 'red',
        marginRight: 10
    }
})