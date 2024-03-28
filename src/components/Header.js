import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Colors from '../utils/Colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation();
    //global state
    const [authState] = useContext(AuthContext)
    // extracting info from the global state
    const { userEmail } = authState
    const { userName } = authState
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image source={{ uri: 'https://up.yimg.com/ib/th?id=OIP.PslOxBNc714WqL1zrd2w9QHaIX&pid=Api&rs=1&c=1&qlt=95&w=108&h=122' }} style={{ width: 45, height: 45, borderRadius: 22.5 }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: 'white', fontFamily: 'Outfit-Bold' }}>Welcome,</Text>
                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Outfit-Bold' }}>{userName}</Text>
                    </View>
                </View>
                <TouchableOpacity /*{onPress={() => navigation.navigate('booking')}*/>
                    <FontAwesome name="bookmark-o" size={27} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, backgroundColor: 'white', width: 350, height: 45, borderRadius: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <TextInput style={{ fontSize: 15, marginLeft: 5 }} placeholder='Search' />
                <TouchableOpacity>
                    <FontAwesome style={{ backgroundColor: 'white', padding: 10, borderRadius: 15 }} name="search" size={24} color="#803FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 35,
        paddingBottom: 30,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})