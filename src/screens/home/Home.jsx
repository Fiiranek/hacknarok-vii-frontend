import { ScrollView, Text } from 'react-native';
import React from 'react';
import Chart from '../../components/chart/Chart';
import Funfact from '../../components/funfacts/Funfact';
import ClothesChart from '../../components/chart/ClothesChart';
export default Home = () => {
    return (
        <ScrollView
            style={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
          <ClothesChart />
        </ScrollView>
    );
};
