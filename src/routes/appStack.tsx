import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

// pages
import Landing from '../pages/landing';
import GiveClasses from '../pages/giveClasses';
import studyTabs from './studyTabs';

function appStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={studyTabs} />
            </Navigator>
        </NavigationContainer>
    )
}

export default appStack;
