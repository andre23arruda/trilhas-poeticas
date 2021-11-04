import { PixelRatio, StyleSheet } from 'react-native'

export const FONT_BACK_LABEL = PixelRatio.get() <= 2 ? 28 : 31

export const colors = {
    black: '#000',
    brown: '#C9B093',
    darkBrown: '#432306',
    gray: '#ccc',
    yellow: '#FFE1A6',
    darkYellow: '#F6BB22',
    white: '#FFF',
    whiteAlpha: 'rgba(255, 255, 255, 0.8)',
}

export default (backgroundColor=colors.yellow) => StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor: backgroundColor,
    }
})
