import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import BusinessList from '../components/BusinessList'

const Display2Screen = () => {
    return (
        <>
            <Slider />
            <BusinessList />
        </>
    )
}

export default Display2Screen

const styles = StyleSheet.create({

})