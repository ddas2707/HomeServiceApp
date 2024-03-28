import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Colors from '../utils/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserScreen = ({ navigation }) => {
    const [authState, setAuthState] = useContext(AuthContext); // Consuming AuthContext

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        try {
            // Validate if userName and userEmail are not empty
            if (!userName || !userEmail) {
                alert('Please enter both UserName and UserEmail');
                return;
            }

            // Update context state
            setAuthState({ userName, userEmail });

            // Save data to AsyncStorage
            await AsyncStorage.setItem('userName', userName);
            await AsyncStorage.setItem('userEmail', userEmail);

            // Clear input fields after submission
            setUserName('');
            setUserEmail('');

            // Navigate to Home screen
            navigation.navigate('Home');

            // console the user details to confirm that the data has stored or not
            console.log("Data==>", { userEmail, userName })

            // Optionally, you can show a success message
            alert('User data saved successfully!');
        } catch (error) {
            console.error('Error saving user data:', error);
            // Optionally, you can show an error message
            alert('Failed to save user data');
        }
    }

    return (
        <View style={{ padding: 30, gap: 30, justifyContent: 'center' }}>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <Text style={{ color: 'black', fontSize: 20 }}>Enter UserName</Text>
                <TextInput
                    style={styles.input1}
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                />
            </View>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <Text style={{ color: 'black', fontSize: 20 }}>Enter UserEmail</Text>
                <TextInput
                    style={styles.input1}
                    onChangeText={(text) => setUserEmail(text)}
                    value={userEmail}
                />
            </View>
            <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: Colors.PRIMARY, width: '40%', alignSelf: 'center', padding: 20, borderRadius: 30 }}>
                <Text style={{ alignSelf: 'center', fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserScreen;

const styles = StyleSheet.create({
    input1: {
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        width: '80%',
        borderRadius: 15,
        color: 'black',
        padding: 10
    }
})
