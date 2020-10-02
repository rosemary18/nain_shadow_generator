import { StyleSheet } from 'react-native'

export default StyleSheet.create({
        container1: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        }, 
        container2: {
            padding: 8,
            height: 56
        },
        container3: {
            height: 40,
            justifyContent: 'center',
            padding: 12
        },
        container4: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center'
        }, 
        container5: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center'
        },
        container6: {
            flex: 1, 
            justifyContent: 'center'
        },
        containerButtons: {
            flexDirection: 'row'
        },
        containerButton: {
            flex: 1,
            minHeight: 56,
            alignItems: 'center'
        },
        containerButtonItem: {
            height: 48, 
            width: 48, 
            borderRadius: 5, 
            borderBottomWidth: 0.5,
            borderColor: '#00000029', 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        containerBottomSet: {
            minHeight: 134,
            padding: 16,
            backgroundColor: '#D2FFBC',
            borderTopLeftRadius: 20, 
            borderTopRightRadius: 20
        },
        valueSlider: {
            height: 20, 
            width: 20, 
            borderRadius: 5, 
            backgroundColor: '#FFFFFF', 
            alignContent: 'center', 
            justifyContent: 'center'
        },
        modalContent: {
            backgroundColor: '#FFF', 
            borderRadius: 10, 
            padding: 8
        }
    })
