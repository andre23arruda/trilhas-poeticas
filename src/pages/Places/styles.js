import { StyleSheet } from 'react-native'
import { colors, FONT_BACK_LABEL } from '../../stylesGlobal'


export default StyleSheet.create({
    backContainer: {
        marginTop: '5%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    buttonBack: {
        flexDirection: 'row',
    },

    pageText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 35,
    },

    placeContainer: {
        width: '100%',
        margin: '5%',
        marginVertical: '5%',
    },

    placeImage: {
        height: 180,
        width: '90%',
        borderRadius: 20,
    },

    placeName: {
        position: 'absolute',
        bottom: 25,
        left: 10,
        height: 30,
        paddingHorizontal: 10,
        color: colors.darkBrown,
        backgroundColor: colors.darkYellow,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 15,
    },

    button: {
        position: 'absolute',
        bottom: '2%',
        right: 10,
        backgroundColor: colors.darkYellow,
        borderRadius: 35,
        shadowColor: colors.black,
        elevation: 5,
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