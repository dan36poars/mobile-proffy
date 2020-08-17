import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

// styles
import styles from './styles';

// images
import landindImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

// services
import api from '../../services/api';


function Landing() {

    const { navigate } = useNavigation();

    const [totalConnections, settotalConnections] = useState(0);

    useEffect(() => {
        
        api.get('connections')
        .then(response => {
            console.log(response);
            const { total } = response.data;
            settotalConnections(total);
        });
       
    }, []);

    function handleNavitateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landindImage} />
            <Text style={styles.title}>
                Seja Bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}> 
                <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText} >Estudar</Text>
                </RectButton>
                <RectButton onPress={handleNavitateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText} >Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas.{' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;
