import React from 'react'
import { Text } from 'react-native'
import styles from './styles'


function CustomText(props) {
	let textStyle = styles.text

    if (props.style?.fontWeight === 'bold') {
        textStyle = styles.textBold
    }

	return (
		<Text style={ [props.style, textStyle] }>
			{ props.children }
		</Text>
	)
}

export default CustomText
