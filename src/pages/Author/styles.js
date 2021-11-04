import { StyleSheet } from 'react-native'
import { colors, FONT_BACK_LABEL } from '../../stylesGlobal'


export default StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
    },

    authorText1: {
        fontSize: FONT_BACK_LABEL,
        color: colors.white,
        width: '100%',
        height: '33.3%',
        textAlign: 'center',
        paddingHorizontal: 20,
        textAlignVertical: 'bottom',
    },

    imageAuthor: {
        height: '33%',
        resizeMode: 'contain',
        width: '100%',
    },

    authorText2: {
        fontSize: FONT_BACK_LABEL,
        color: colors.white,
        width: '100%',
        height: '33.3%',
        textAlign: 'center',
        paddingHorizontal: 20,
    },

    button: {
        position: 'absolute',
        top: '50%',
        right: 10,
        backgroundColor: colors.gray,
        borderRadius: 35,
    },

    buttonIcon: {
        fontSize: 10,
        color: '#ccc',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 65,
        height: 65,
    }
})