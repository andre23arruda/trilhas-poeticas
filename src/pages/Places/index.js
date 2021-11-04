import React from 'react'
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { Feather } from '@expo/vector-icons'

import CustomText from '../../components/CustomText'
import MainScreen from '../../components/MainScreen'

// styles
import styles from './styles'
import { colors } from '../../stylesGlobal'

// mocks
import { places } from '../../../mocks/places'

// utils
import { goToPage } from '../../utils/navigation'


export default function Places() {
    const navigation = useNavigation()

    return (
        <MainScreen backgroundColor={ colors.brown }>
            <View style={ styles.backContainer }>
                <TouchableOpacity
                    style={ styles.buttonBack }
                    onPress={ () => goToPage(navigation, 'Author') }
                >
                    <Feather name="chevron-left" size={ 35 } color={ colors.black }/>
                </TouchableOpacity>

                <CustomText style={ styles.pageText }>Locais</CustomText>

                <View />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={ false }
                style={ styles.scrollView }>
                { places.map(place => (
                    <TouchableOpacity
                        onPress={ () => goToPage(navigation, 'PlaceDetail', place) }
                        key={ place.id }
                        style={ styles.placeContainer }
                    >
                        <Image source={ place.images.now } style={ styles.placeImage }/>
                        <CustomText style={ styles.placeName }>{ place.name }</CustomText>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={ styles.button }
                onPress={ () => goToPage(navigation, 'PlacesMap') }
            >
                <Text style={ styles.buttonIcon }>
                    <Feather name="map" size={ 28 } color={ colors.darkBrown }/>
                </Text>
            </TouchableOpacity>

        </MainScreen>

    )
}
