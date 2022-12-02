import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Login from '../screens/auth/Login';
import Registration from '../screens/auth/Registration';
import Categories from '../screens/Categories';
import Category from '../screens/Category';
import BookScreen from '../screens/BookScreen';
import UserBtn from '../components/UserBtn';

const screenOptions = {
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    headerTitleAlign: 'left',
    headerStyle: {
        backgroundColor: '#381466',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontSize: 20,
        color: '#ffffff',
    },
    headerLargeTitleStyle: {
        fontSize: 20,
        color: '#ffffff',
    },
    headerRight: () => <UserBtn />
};

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <HomeStack.Screen
                name="Home"
                component={ Home }
                options={{ title: 'Կատեգորիաներ', headerLeft: null }}
            />
            <HomeStack.Screen
                name="Profile"
                component={ Profile }
                options={{
                    // presentation: "modal",
                    title: 'Անձնագիր',
                    headerLeft: null }}
                />
        </HomeStack.Navigator>
    );
};

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            initialRouteName='Login'
            screenOptions={screenOptions} >
            <AuthStack.Screen
                name="Auth"
                component={ Login }
                options={{ title: 'Ներս մտնել', headerTitleAlign: 'center' }} />
            <AuthStack.Screen
                name="Registration"
                component={ Registration }
                options={{ title: 'Նոր հաշիվ', headerTitleAlign: 'center' }}  />
        </AuthStack.Navigator>
    );
};

const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = () => {
    return (
        <FavoriteStack.Navigator
            initialRouteName='Favorite'
            screenOptions={screenOptions} >
            <FavoriteStack.Screen name="Favorite" component={ Favorite } options={{ title: 'Իմ գրքերը' }} />
        </FavoriteStack.Navigator>
    );
};

const CatalogStack = createStackNavigator();

const CatalogStackScreen = () => {
    return (
        <CatalogStack.Navigator
            initialRouteName='Categories'
            screenOptions={screenOptions} >
            <CatalogStack.Screen
                name="Categories"
                component={ Categories }
                options={{ title: 'կատալոգ' }} />
            <CatalogStack.Screen
                name="Category"
                component={ Category }
                options={({ route }) => ({ title: route.params.name })} />
            <CatalogStack.Screen
                name="Book"
                component={ BookScreen }
                options={({ route }) => ({ title: route.params.name })} />
        </CatalogStack.Navigator>
    );
};

const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator
            initialRouteName='Search'
            screenOptions={screenOptions} >
            <SearchStack.Screen name="Search" component={ Search }  options={{ title: 'Որոնում' }} />
        </SearchStack.Navigator>
    );
};


const WelcomStack = createStackNavigator();

const WelcomStackScreen = () => {
    return (
        <WelcomStack.Navigator
            initialRouteName='Welcome'
            screenOptions={screenOptions}
        >
            <WelcomStack.Screen name="Welcome" component={ Welcome }  options={{
                    headerShown: false
                }} />
        </WelcomStack.Navigator>
    );
};

export {
    HomeStackScreen,
    FavoriteStackScreen,
    CatalogStackScreen,
    SearchStackScreen,
    AuthStackScreen,
    WelcomStackScreen,
};
