import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

const ContactMeScreen = props => {
    return (
        <View style={styles.main}>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.mainTitle}> About Us </Text>
                <Text></Text>
                <View style={styles.desc}>
                <Text > We are supper cool! 
                    many many years ago, our founder found this product and decided 
                    that this is time for Item.
                    and people are ready
                </Text>
                </View>
            </View>

            <View style={styles.mainContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-mail' : 'ios-mail'}
                        size={35}
                    />
                    <Text style={styles.title}> Email Us </Text>
                    <Text> khalikov.m@gmail.com </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-call' : 'ios-call'}
                        size={35}

                    />
                    <Text style={styles.title}> Give Us A Call </Text>
                    <Text> 555-555-5555 </Text>
                </View>

            </View>
        </View>

    )
}



ContactMeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Contact Us',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    main: {
        height: '100%'
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 45
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        marginVertical: 2,
        justifyContent: 'center'
    },
    mainTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 2,
        justifyContent: 'center'
    },
    desc: {
        paddingLeft: 45,
        paddingRight: 45
    }
});

export default ContactMeScreen;