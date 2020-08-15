import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Pages
import TeacherList from '../pages/teacherList';
import Favourites from '../pages/favourites';


const { Navigator, Screen } = createBottomTabNavigator();

function studyTabs() {
    return (
        <Navigator
        tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,
            },
            inactiveBackgroundColor: '#FAFAFC',
            activeBackgroundColor: '#EBEBF5',
            inactiveTintColor: '#C1BCCC',
            activeTintColor: '#32264D',

        }}
        >
            <Screen options={{
                tabBarLabel: 'Proffys',
                tabBarIcon: ({ color, size, focused }) => {
                    return(
                        <Ionicons size={size} color={focused ? '#8257E5' : color} name="ios-easel" />
                    );
                }
            }} name="TeacherList" component={TeacherList} />
            
            <Screen options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size, focused }) => {
                    return(
                        <Ionicons size={size} color={focused ? '#8257E5' : color} name="ios-heart" />
                    );
                }
            }} name="Favourites" component={Favourites} />
        </Navigator>
    );
};

export default studyTabs;
