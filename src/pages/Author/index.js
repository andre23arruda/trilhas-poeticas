import React from 'react'
import { View, Image, ImageBackground, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'

// iconst
import { Feather } from '@expo/vector-icons'

// custom components
import CustomText from '../../components/CustomText'

// styles and images
import author from '../../assets/author.png'
import styles from './styles'
import { colors } from '../../../stylesGlobal'

// utils
import { goToPage } from '../../utils/navigation'


export default function Author() {
    const navigation = useNavigation()

    return (
        <View>
            <StatusBar style="auto" />
            <ImageBackground
                style={ styles.background }
                source={ author }
                resizeMode="cover"
                blurRadius={ 10 }
            >
                <CustomText style={ styles.authorText1 }>
                    Manoel de Barros nasceu em 19/12/1916,
                    em Cuiabá (MT). Aos dois meses de idade mudou-se para Corumbá
                    com sua família, e depois para uma fazenda próxima à cidade.
                </CustomText>

                <Image source={ author } style={ styles.imageAuthor }/>

                <CustomText style={ styles.authorText2 }>
                    O local se tornou sua "Primeira Casa", por ser palco da sua infância,
                    período constantemente retomado pelo poeta, por dizer ser a
                    única fase da vida presenciada por ele.
                </CustomText>

                <TouchableOpacity
                    style={ styles.button }
                    onPress={ () => goToPage(navigation, 'Places') }
                >
                    <Text style={ styles.buttonIcon }>
                    <Feather name="arrow-right" size={ 28 } color={ colors.black }/>
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
