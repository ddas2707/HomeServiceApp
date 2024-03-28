import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import BusinessList from '../components/BusinessList';

const data = new Array(50).fill(0).map((_, index) => ({ id: index }))

const HomeScreen = () => {
    return (

        <View style={styles.container}>
            <Header />
            <View>
                <Slider />
                <Categories />
            </View>
            <BusinessList />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    }
})

//Flatlist code 
{/* <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <Animatable.View
                            animation={'fadeInUp'}
                            duration={1000}
                            delay={index * 100}
                            style={{
                                width: '90%',
                                height: 100,
                                backgroundColor: '#DDD',
                                marginTop: 30,
                                borderRadius: 20,
                                alignSelf: 'center'
                            }}>
                        </Animatable.View>
                    )
                }}
            /> 
    </View>*/}