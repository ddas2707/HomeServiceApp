import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Animated } from 'react-native'

const Progress = ({ step, steps, height }) => {
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    //const reactive = useRef(new Animated.Value(-1000).current);
    return (
        <>
            <Text style={{ color: 'black' }}>
                {step}/{steps}
            </Text>
            <View style={{
                height,
                backgroundColor: 'rgba(0,0,0,0)',
                borderRadius: height,
                overflow: 'hidden',
            }}>
                <View style={{
                    height,
                    width: '100%',
                    borderRadius: height,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    position: 'absolute',
                    left: 0,
                    top: 0
                }} />
            </View>
        </>
    )
}

const Animation = () => {
    return (
        <>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#000'
                />
                <Progress step={1} steps={10} height={10} />
            </View>
        </>
    )
}

export default Animation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
})