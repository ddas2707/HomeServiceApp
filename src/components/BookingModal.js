import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CalendarPicker from 'react-native-calendar-picker'
import { FlatList } from 'react-native';
import Colors from '../utils/Colors'
import GlobalApi from '../utils/GlobalApi';
//import { useUser } from '@clerk/clerk-expo'
import { AuthContext } from '../context/AuthContext';


const BookingModal = ({ setShowModal, businessId }) => {
    const [authState] = useContext(AuthContext);
    const { userName } = authState;
    const { userEmail } = authState;

    const [selectedDate, setSelectedDate] = useState(null);
    const [timeList, setTimeList] = useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const [note, setNote] = useState();


    useEffect(() => {
        getTime();
        //console.log('Data', { userEmail, userName })
    }, []);

    const createNewBooking = () => {
        if (!selectedTime || !selectedDate) {
            ToastAndroid.show('Please select date and time ', ToastAndroid.LONG)
            return;
        }
        const data = {
            userName: JSON.stringify({ userName }), // Stringify userName
            userEmail: JSON.stringify({ userEmail }), // Stringify userEmail
            time: selectedTime,
            date: selectedDate,
            businessId: businessId
        }
        //console.log('Data', { userEmail, userName })
        GlobalApi.createBooking(data).then(resp => {
            console.log('resp:', resp)
            ToastAndroid.show('Booking Created Successfully', ToastAndroid.LONG)
            setShowModal(false)
        })
            .catch(error => {
                console.error('Error creating booking:', error);
                ToastAndroid.show('Error creating booking', ToastAndroid.LONG);
            })
    }

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i <= 12; i++) {
            timeList.push({
                time: i + ':00AM'
            });
            timeList.push({
                time: i + ':30AM'
            });
        }
        for (let i = 1; i <= 7; i++) {
            timeList.push({
                time: i + ':00PM'
            });
            timeList.push({
                time: i + ':30PM'
            });
        }
        setTimeList(timeList);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View>
                    <TouchableOpacity onPress={() => setShowModal(false)} style={{ paddingTop: 20, paddingLeft: 10 }}>
                        <AntDesign size={32} name="arrowleft" color={'black'} />
                    </TouchableOpacity>
                </View>
                {/* Calendar Section  */}
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '600', paddingVertical: 10, paddingHorizontal: 20, fontFamily: 'Outfit-Bold' }}>Select Date</Text>
                <View style={styles.CalendarContainer}>
                    <CalendarPicker
                        width={340}
                        minDate={Date.now()}
                        todayBackgroundColor='yellow'
                        todayTextStyle={{ color: 'black' }}
                        selectedDayColor='#7300e6'
                        selectedDayTextColor='white'
                        onDateChange={handleDateChange} // Update selected date
                    />
                </View>
                {/* Display Selected Date */}
                {/* {selectedDate && (
                <Text style={{ color: 'black', fontSize: 16, paddingHorizontal: 20 }}>
                    Selected Date: {selectedDate.toDateString()}
                </Text>
            )} */}
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '700', marginBottom: 10, fontFamily: 'Outfit-Medium' }}>Select Time Slot</Text>
                    <FlatList
                        data={timeList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={index} style={styles.time}
                                onPress={() => setSelectedTime(item.time)}
                            >
                                <Text style={[selectedTime == item.time ? styles.selectedTime : styles.unselectedTime]}>{item.time}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                {/* Note section for the users  */}
                <View style={{ paddingHorizontal: 20, paddingTop: 20, gap: 7 }}>
                    <Text style={{ color: 'black', fontFamily: 'Outfit-Medium', fontSize: 20 }}>
                        Any Suggestion Note
                    </Text>
                    <TextInput
                        placeholder='Add note here'
                        numberOfLines={5}
                        multiline={true}
                        style={styles.TextInput}
                        onChange={(e) => setNote(e)}
                    />
                    <TouchableOpacity style={styles.confirmBtn} onPress={() => createNewBooking()}>
                        <Text style={{ color: '#fff', fontFamily: 'Outfit-Medium', fontSize: 16 }}>Confirm & Book </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default BookingModal;

const styles = StyleSheet.create({
    CalendarContainer: {
        backgroundColor: '#B7C9F2',
        borderRadius: 15,
        marginBottom: 20,
        marginHorizontal: 20
    },
    time: {

    },
    selectedTime: {
        padding: 10,
        color: '#fff',
        borderWidth: 1,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginRight: 10,
    },
    unselectedTime: {
        padding: 10,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 99,
        marginRight: 10
    },
    TextInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        textAlignVertical: 'top',
        padding: 10,
        color: 'black',
        marginBottom: 10
    },
    confirmBtn: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        elevation: 10
    }
});
