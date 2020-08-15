import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// Styles
import styles from './styles';

// Images
import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {

    const { goBack } = useNavigation();

    function handleNavigateToLandigPage() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBackgroundImage} style={styles.content}>
                <Text style={styles.title}>
                    Quer ser um Proffy
                </Text>
                <Text style={styles.description}>
                    Para começãr, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>
            
            <RectButton onPress={handleNavigateToLandigPage} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Tudo Bem
                </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses
