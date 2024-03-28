import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../utils/GlobalApi'
import { FlatList } from 'react-native'
import BusinessSlider from './BusinessSlider'
import { useNavigation } from '@react-navigation/native'

const BusinessList = () => {
    const navigation = useNavigation();
    const [businessList, setBusinessList] = useState([]);
    useEffect(() => {
        getBusinessList();
    }, [])
    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(resp => {
            setBusinessList(resp?.businessLists)
            //console.log(resp.businessLists)
        })
    }
    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.heading}>BusinessList</Text>
                <TouchableOpacity onPress={() => navigation.navigate('BusinessListByCategory')}>
                    <Text style={{ color: 'black' }}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={businessList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View >
                            <BusinessSlider business={item} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default BusinessList

const styles = StyleSheet.create({
    heading: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },

})