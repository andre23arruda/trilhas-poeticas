import { Linking } from 'react-native'

function goToPage(navigation, pageName, content=null) {
    navigation.navigate(pageName, { content })
}

const initialRegion = {
    latitude: -19.0013699,
    longitude: -57.6515578,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
}

function showRoutes(latitude, longitude) {
    const url = `https://www.google.com/maps/dir/?api=1&travelmode=walking&destination=${ latitude },${ longitude }`
    Linking.canOpenURL(url)
    .then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url)
        } else {
            return Linking.openURL(url)
        }
    }).catch(err => console.error('An error occurred', err))
}

export { goToPage, initialRegion, showRoutes }