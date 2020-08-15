import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257E5',
        flex: 0,
        justifyContent: "center",
        padding: 40,        
    },

    banner: {
      width: '100%',
      resizeMode: 'contain'
    },

    title: {
        color: '#FFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 20,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecondary: {
        backgroundColor: '#04D361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFFFFF',
        fontSize: 20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 30,
    }
});

export default styles;