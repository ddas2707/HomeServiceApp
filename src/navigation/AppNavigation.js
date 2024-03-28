import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import Display2Screen from '../screens/Display2Screen'
import BusinessListByCategoryScreen from '../screens/BusinessListByCategoryScreen'
import BusinessDetailScreen from '../screens/BusinessDetailScreen'
import LoginScreen from '../screens/LoginScreen'
import UserScreen from '../screens/UserScreen'
import Animation from '../components/Animation'
import { AuthProvider } from '../context/AuthContext'

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='User' component={UserScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Display2' component={Display2Screen} options={{ headerShown: false }} />
                    <Stack.Screen name='BusinessListByCategory' component={BusinessListByCategoryScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='BusinessDetailScreen' component={BusinessDetailScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Animation' component={Animation} options={{ headerShown: false }} />
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})