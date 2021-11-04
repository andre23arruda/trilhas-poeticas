import React, { useState } from 'react'
import { View, Image, ScrollView, TouchableOpacity, Text, Dimensions, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import Carousel from 'react-native-snap-carousel'

// icons
import { Feather } from '@expo/vector-icons'

// custom components
import CustomText from '../../components/CustomText'

// styles
import styles from './styles'
import { colors } from '../../../stylesGlobal'

// utils
import { goToPage, showRoutes } from '../../utils/navigation'

// mocks
import { poems } from '../../../mocks/poems'


function RenderItem({ item, index }){
    return (
        <Image source={ item.image } style={ styles.placeImage }/>
    )
}

export default function PlaceDetail() {
    const navigation = useNavigation()

    const route = useRoute()
	const place = route.params.content

    const [activeIndex, setActiveIndex] = useState(0)
    const [activeTab, setActiveTab] = useState(1)

    const width = Dimensions.get('screen').width

    function getPoemById(poem_id) {
        const poem = poems.filter(poem => poem.id === poem_id)
        return poem[0]
    }

    const poem = getPoemById(place.poem)

    const images = [{ image: place.images.now }]
    if (place.images.old)
        images.push({ image: place.images.old })

    function getSelectedContent() {
        switch (activeTab) {
            case 1:
                return poem.content
            case 2:
                return poem.description
            case 3:
                return `
Poema: ${ poem.reference }

Imagens:
    ▶ ${ place.reference.now }
    ${ place.reference.old ? '▶ ' + place.reference.old : '' }`
}
    }

    return (
        <View style={ styles.pageContainer }>
            <StatusBar style="auto" />

            <View>
                <Carousel
                    layout={ 'default' }
                    data={ images}
                    activeSlideOffset={ 1 }
                    sliderWidth={ width }
                    itemWidth={ width }
                    renderItem={ ({ item, index }) => (
                        <RenderItem item={ item } index={ index } />
                    )}
                    onSnapToItem = { index => setActiveIndex(index) }
                />
                <CustomText style={ styles.placeName }>{ place.name }</CustomText>

                <TouchableOpacity
                    style={ styles.buttonRoute }
                    onPress={ () => showRoutes(place.latitude, place.longitude) }
                >
                    <Text style={ styles.buttonIcon }>
                        <Feather name="map-pin" size={ 23 } color={ colors.black }/>
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={ styles.tabsContainer }>
                <TouchableOpacity
                    onPress={ () => setActiveTab(1) }
                >
                    <CustomText
                        style={ activeTab === 1 ? styles.activeTab : styles.tab }
                    >
                        Poema
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => setActiveTab(2) }
                >
                    <CustomText
                        style={ activeTab === 2 ? styles.activeTab : styles.tab }
                    >
                        Comentário
                    </CustomText>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ () => setActiveTab(3) }
                >
                    <CustomText
                        style={ activeTab === 3 ? styles.activeTab : styles.tab }
                    >
                        Referência
                    </CustomText>
                </TouchableOpacity>
            </View>

            <View style={ styles.hr }/>

            <ScrollView
                style={ styles.poemContainer }
                showsVerticalScrollIndicator={ false }
            >
                <CustomText style={ styles.poem }>
                    { getSelectedContent() }
                </CustomText>
            </ScrollView>

            <View style={ styles.backContainer }>
                <TouchableOpacity
                    style={ styles.buttonBack }
                    onPress={ () => goToPage(navigation, 'Places') }
                >
                    <Feather name="chevron-left" size={ 35 } color={ colors.white }/>
                </TouchableOpacity>
            </View>
        </View>

    )
}
