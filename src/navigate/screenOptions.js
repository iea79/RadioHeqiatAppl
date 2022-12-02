import React from 'react';
import UserBtn from '../components/UserBtn';

const screenOptions = {
    contentStyle: {
        backgroundColor: '#381466',
    },
    headerStyle: {
        backgroundColor: '#381466',
    },
    headerBackTitleVisible: false,
    // headerBackground: HeaderBg,
    headerShadowVisible: false,
    headerTitleStyle: {
        fontSize: 20,
        color: '#ffffff',
    },
    headerLargeTitleStyle: {
        fontSize: 20,
        color: '#ffffff',
    },
    cardStyle: {
        // backgroundColor: '#381466'
    },
    headerTitleAlign: 'left',
    headerTintColor: '#ffffff',
    headerRight: () => <UserBtn />
};

export default screenOptions;
