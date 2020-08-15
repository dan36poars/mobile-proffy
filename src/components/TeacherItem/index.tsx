import React from 'react'
import { Text, View, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

// Style
import style from './styles';

// Icons
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavouriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image
                    style={style.avatar}
                    source={{ uri: 'https://imagens.canaltech.com.br/empresas/690.400.jpg' }}
                />

                <View style={style.profileInfo}>
                    <Text style={style.name}>Daniel Corrêa</Text>
                    <Text style={style.subject}>Física</Text>
                </View>
            </View>

            <Text style={style.bio}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{'\n'}{'\n'} Obcaecati necessitatibus rem quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga quibusdam sapiente?
            </Text>

            <View style={style.footer}>
                <Text style={style.price}>Preço/hora {'   '}
                    <Text style={style.priceValue}>R$ 100,00</Text>
                </Text>
                <View style={style.buttonsContainer}>
                    <RectButton style={[style.favouriteButton, style.favourited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavouriteIcon} />
                    </RectButton>

                    <RectButton style={style.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={style.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;
