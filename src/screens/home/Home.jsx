import { ScrollView, Text } from 'react-native';
import React from 'react';
import Chart from '../../components/chart/Chart';
import Funfact from '../../components/funfacts/Funfact';
export default Home = () => {
    return (
        <ScrollView
            style={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        ></ScrollView>
    );
};
