import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F7'
    },

    teacherList: {
        marginTop: -40,
    },
    
    searchForm: {
        marginBottom: 12,
        marginTop: 15,       
    },
    
    label: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',        
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%',
    },
    
    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 15,   
    },
   
});

export default styles;