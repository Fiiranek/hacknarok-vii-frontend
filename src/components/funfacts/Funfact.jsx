import React, { useEffect } from 'react';
import { Dimensions, View, Text, Image } from 'react-native';
import { useTheme, List } from 'react-native-paper';
import lightbulb from '../../../assets/lightbulb.png';
import facts from './facts';
export default () => {
    const theme = useTheme();
    const getRandomInt = max => {
        return Math.floor(Math.random() * max);
    };
    const drawFunfact = () => {
        let random = getRandomInt(facts.length);
        return facts[random].text;
    };
    const [caption, setCaption] = React.useState(drawFunfact);
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,

                margin: 5,
                backgroundColor: 'white',
                height: Dimensions.get('window').height * 0.15,
                width: Dimensions.get('window').width * 0.95,
                padding: 10,
            }}
        >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 30, height: 30, marginTop: 10}} source={lightbulb}></Image>
                <Text style={{ ...theme.text.h1, alignSelf: 'left', marginLeft: 20, marginBottom: 10 }}>Did you know?</Text>
            </View>

            <Text style={{...theme.text.h2, marginBottom: 10}}>{caption}</Text>
        </View>
    );
};
