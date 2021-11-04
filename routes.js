import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// pages
import Author from './src/pages/Author'
import Places from './src/pages/Places'
import PlacesMap from './src/pages/PlacesMap'
import PlaceDetail from './src/pages/PlaceDetail'

const AppStack = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Author' component={ Author } />
                <AppStack.Screen name='Places' component={ Places } />
                <AppStack.Screen name='PlacesMap' component={ PlacesMap } />
                <AppStack.Screen name="PlaceDetail" component={ PlaceDetail } />

            </AppStack.Navigator>
        </NavigationContainer>
    )

}

export default Routes