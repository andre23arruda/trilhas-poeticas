import React from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import MapView, { Marker, Callout } from 'react-native-maps'

// icons
import { Feather } from '@expo/vector-icons'

// custom components
import CustomText from '../../components/CustomText'
import MainScreen from '../../components/MainScreen'

// styles and images
import mapMarker from '../../assets/mapMarker.png'
import styles from './styles'
import { colors } from '../../stylesGlobal'

// mocks
import { places } from '../../../mocks/places'

// utils
import { goToPage, initialRegion } from '../../utils/navigation'


const calloutAnchor = {
    x: 0.4,
    y: 0,
}

export default function PlacesMap() {
    const navigation = useNavigation()

    return (
        <MainScreen backgroundColor={ colors.brown }>
            <View style={ styles.backContainer }>
                <TouchableOpacity
                    style={ styles.buttonBack }
                    onPress={ () => goToPage(navigation, 'Places') }
                >
                    <Feather name="chevron-left" size={ 35 } color={ colors.black }/>
                </TouchableOpacity>

                <CustomText style={ styles.pageText }>
                    Mapa
                </CustomText>

                <View />
            </View>

            <View style={ styles.mapContainer}>
                <MapView
                    style={ styles.map }
                    initialRegion={ initialRegion }
                >
                    { places.map(place => (
                        <Marker
                            key={ place.id }
                            icon={ mapMarker }
                            calloutAnchor={ calloutAnchor }
                            coordinate={{
                                latitude: place.latitude,
                                longitude: place.longitude,
                            }}
                        >
                            <Callout
                                tooltip
                                onPress={ () => goToPage(navigation, 'PlaceDetail', place) }
                            >
                                <View style={ styles.calloutContainer }>
                                    <CustomText style={ styles.calloutText }>
                                        { place.name }
                                    </CustomText>
                                </View>
                            </Callout>
                        </Marker>
                    ))}

                </MapView>
            </View>


        </MainScreen>

    )
}
