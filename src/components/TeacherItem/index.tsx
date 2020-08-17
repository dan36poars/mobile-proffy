import React, { useState } from 'react'
import { Text, View, Image, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

// Style
import style from './styles';

// Icons
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavouriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

export interface Teacher {
    "id": number;
    "subject": string;
    "cost": number;
    "name": string;
    "avatar": string;
    "whatsapp": string;
    "bio": string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favourited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favourited }) => {

    const [isFavourited, setIsFavourited] = useState(favourited);

    function handleLinkToWhatsapp() {
        api.post('connections', {
            user_id: teacher.id,
        });
        Linking.openURL(`whatsapp://send?phone=55${teacher.whatsapp}`);
    }

    async function handleToggleFavourites() {
        const favourites = await AsyncStorage.getItem('favourites');
        let favouritesArray = [];

        if (favourites) {
           favouritesArray = JSON.parse(favourites);
        }

        if (isFavourited) {
            // remove from favourites
            const favouritesIndex = favouritesArray.findIndex( (teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favouritesArray.splice(favouritesIndex, 1);
            setIsFavourited(false);

        } else {
            // add to favourites
            favouritesArray.push(teacher);
            setIsFavourited(true);
        }
        await AsyncStorage.setItem('favourites', JSON.stringify(favouritesArray));
    }

    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image
                    style={style.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={style.profileInfo}>
                    <Text style={style.name}>{teacher.name}</Text>
                    <Text style={style.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={style.bio}>
                {teacher.bio}
            </Text>

            <View style={style.footer}>
                <Text style={style.price}>Preço/hora {'   '}
                    <Text style={style.priceValue}>R$ {teacher.cost}</Text>
                </Text>
                <View style={style.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavourites}
                        style={[
                            style.favouriteButton, 
                            isFavourited ? style.favourited : {},
                        ]}
                    >
                        { isFavourited 
                            ? <Image source={unfavouriteIcon} /> 
                            : <Image source={heartOutlineIcon} /> 
                        }
                        
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={style.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={style.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;
