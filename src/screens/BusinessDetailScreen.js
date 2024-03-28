import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import AntDesign from react-native-vector-icons
import Entypo from 'react-native-vector-icons/Entypo'; // Import AntDesign from react-native-vector-icons
import BusinessPhotos from '../components/BusinessPhotos';
import BookingModal from '../components/BookingModal';
import { useNavigation, useRoute } from '@react-navigation/native'

const BusinessDetailScreen = () => {
    const navigation = useNavigation();

    const [business, setBusiness] = useState(null); // Initialize business state with null
    const [readFullDesc, setReadFullDesc] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const param = useRoute().params

    useEffect(() => {
        // Set business data from route params
        setBusiness(param?.business);
    }, []);

    return (
        <View style={styles.container}>
            {business && (
                <>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: business?.images[0]?.url }}
                            style={styles.image}
                        />
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <AntDesign size={32} name="arrowleft" color={'white'} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={styles.contentContainer}>
                        <Text style={styles.infoName}>{business?.name}</Text>
                        <View style={styles.contactInfoContainer}>
                            <Text style={styles.contactPerson}>{business?.contactPerson}</Text>
                            <Text style={styles.category}>{business?.category.name}</Text>
                        </View>
                        <View style={styles.addressContainer}>
                            <Entypo size={25} name="location-pin" color={'#5755FE'} />
                            <Text style={styles.address}>{business?.address}</Text>
                        </View>

                        {/* Horizontal line  */}
                        <View style={styles.horizontalLine} />

                        <View style={styles.aboutContainer}>
                            <Text style={styles.about}>About Me</Text>
                            <Text style={styles.desc}>
                                {readFullDesc ? business?.about : business?.about.slice(0, 500)}
                            </Text>
                            <TouchableOpacity onPress={() => setReadFullDesc(!readFullDesc)}>
                                <Text style={styles.readMore}>{readFullDesc ? "Show Less" : "Show More"}</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Horizontal line  */}
                        <View style={styles.horizontalLine} />

                        <BusinessPhotos business={business} />
                    </ScrollView>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.messageButton} onPress={() => navigation.navigate('Animation')}>
                            <Text style={styles.messageButtonText}>Message</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bookButton} onPress={() => setShowModal(true)}>
                            <Text style={styles.bookButtonText}>Book Now</Text>
                        </TouchableOpacity>
                        {/* Booking Screen in Modal */}
                        <Modal animationType='slide' visible={showModal}>
                            <BookingModal
                                businessId={business.id}
                                setShowModal={setShowModal}
                            />
                        </Modal>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        height: 250,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    backButton: {
        position: 'absolute',
        paddingVertical: 20,
        paddingLeft: 10,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 80
    },
    infoName: {
        fontSize: 25,
        color: 'black',
        fontWeight: '900',
        paddingTop: 12,
    },
    contactInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    contactPerson: {
        fontSize: 18,
        color: '#864AF9',
        fontWeight: '500',
    },
    category: {
        fontSize: 15,
        color: '#5755FE',
        fontWeight: '500',
        backgroundColor: '#B7C9F2',
        padding: 3,
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    address: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
        marginLeft: 5,
    },
    horizontalLine: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15,
        marginBottom: 10,
    },
    aboutContainer: {
        marginBottom: 20,
    },
    about: {
        fontSize: 24,
        color: 'black',
        fontWeight: '700',
    },
    desc: {
        color: '#31363F',
        marginTop: 10,
    },
    readMore: {
        color: 'blue',
        marginTop: 5,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 7,
        backgroundColor: '#fff',
        height: 70,
        borderRadius: 30,
        paddingHorizontal: 20,
        gap: 30
    },
    messageButton: {
        borderColor: '#864AF9',
        borderWidth: 1,
        paddingHorizontal: 57,
        paddingVertical: 17,
        borderRadius: 30,
    },
    messageButtonText: {
        color: '#864AF9',
        fontSize: 16,
    },
    bookButton: {
        backgroundColor: '#864AF9',
        paddingHorizontal: 57,
        paddingVertical: 17,
        borderRadius: 30,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default BusinessDetailScreen;
