import { View, ScrollView, Dimensions, Text, Image } from 'react-native';
import React from 'react';
import { HEXtoRGB, capitalize } from '../../utils';
import { useTheme } from 'react-native-paper';
import { List, Divider } from 'react-native-paper';
import Svg, { Path } from 'react-native-svg';
import a1 from '../../../assets/avatars/a1.png';
import a2 from '../../../assets/avatars/a2.png';
import a3 from '../../../assets/avatars/a3.png';
import user from '../../../assets/user.png';
export default Ranking = () => {
    const data = [
        {
            username: 'Tom',
            points: 100,
            image: a1,
        },
        {
            username: 'Adam',
            points: 40,
            image: a2,
        },
        {
            username: 'Eva',
            points: 20,
            image: a3,
        },
    ];
    const theme = useTheme();
    function nth(n) {
        return ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th';
    }
    return (
        <ScrollView
            style={{
                backgroundColor: 'white',
                marginTop: 50,
                display: 'flex',
                alignContent: 'end',
                flexDirection: 'column',
            }}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <List.Section
                style={{
                    width: Dimensions.get('window').width * 0.8,
                }}
            >
                <List.Subheader style={theme.text.h1}>Leaderboard</List.Subheader>
                {data.map((record, index) => (
                    <>
                        <List.Item
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                height: Dimensions.get('window').height * 0.1,
                                marginVertical: 5,
                            }}
                            key={index}
                            left={() => <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={record.image} />}
                            right={() => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text>{index + 1 + nth(index + 1)}</Text>
                                </View>
                            )}
                            description={record.points + ' points'}
                            title={capitalize(record.username).replace('-', ' ')}
                        />
                        <Divider />
                    </>
                ))}
            </List.Section>
        </ScrollView>
    );
};
