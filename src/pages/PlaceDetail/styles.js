import { StyleSheet, PixelRatio } from 'react-native'
import { colors, FONT_BACK_LABEL } from '../../stylesGlobal'

const POEM_FONT_SIZE = PixelRatio.get() <= 2 ? 16.5 : 18

export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: colors.yellow,
    },

    test: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.black
    },

    backContainer: {
        position: 'absolute',
        top: '8%',
        left: '5%',
        zIndex: 200
    },

    buttonBack: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    backText: {
        width: 200,
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold',
    },

    placeImage: {
        height: 250,
        width: '100%',
    },

    placeName: {
        position: 'absolute',
        bottom: 25,
        left: 10,
        height: 30,
        paddingHorizontal: 10,
        color: colors.white,
        backgroundColor: colors.black,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 15,
    },

    buttonRoute: {
        position: 'absolute',
        bottom: -20,
        right: 25,
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
        width: 45,
        height: 45,
    },

    tabsContainer: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 10,
    },

    tab: {
        fontSize: 22,
        marginRight: 20,
        color: colors.darkBrown,
    },

    activeTab: {
        fontSize: 22,
        marginRight: 20,
        color: colors.darkBrown,
        borderBottomColor: colors.darkBrown,
        borderBottomWidth: 3,
    },

    hr: {
        borderBottomWidth: 2,
        borderBottomColor: colors.darkBrown,
        marginTop: -11,
        marginLeft: 20,
    },

    poemContainer: {
        paddingHorizontal: 20,
    },

    poem: {
        fontSize: POEM_FONT_SIZE,
        lineHeight: POEM_FONT_SIZE + 10,
        color: colors.darkBrown,
        paddingBottom: 30,
    },
})