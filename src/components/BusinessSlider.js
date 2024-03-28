import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BusinessSlider = ({ business }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('BusinessDetailScreen', { business: business })}>
            <View style={styles.slider}>
                <Image source={{ uri: business?.images[0]?.url }} style={{ height: 120, width: 160, borderRadius: 20, marginBottom: 10 }} />
                <Text style={{ color: 'black', fontSize: 17, fontWeight: '700', }}>{business?.name}</Text>
                <Text style={{ color: 'gray', fontSize: 13, fontWeight: '400' }}>{business?.contactPerson}</Text>
                <Text style={{ color: 'black', fontSize: 10, backgroundColor: 'skyblue', alignSelf: 'flex-start', padding: 5, borderRadius: 10 }}>{business?.category?.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BusinessSlider

const styles = StyleSheet.create({
    slider: {
        marginRight: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 7,
        display: 'flex',
        gap: 5
    }
})