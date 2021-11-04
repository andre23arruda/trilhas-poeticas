import { StyleSheet, Dimensions } from 'react-native'
import { colors, FONT_BACK_LABEL } from '../../stylesGlobal'


export default StyleSheet.create({
    backContainer: {
        marginTop: '5%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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

    mapContainer: {
        margin: '2.5%',
        flex: 1,
        borderRadius: 20,
		overflow: 'hidden',
		borderWidth: 5,
		borderColor: 'transparent',
	},

    map: {
        flex: 1,
        height: '100%',
        width: '100%'
    },

    calloutContainer: {
        height: 50,
        paddingHorizontal: 16,
        backgroundColor: colors.yellow,
        borderRadius: 16,
        justifyContent: 'center',
    },

    calloutText: {
        color: colors.darkBrown,
        fontSize: 20,
        fontWeight: 'bold',
    },
})