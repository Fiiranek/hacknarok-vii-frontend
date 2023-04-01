import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Modal } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
const QRModal = ({ showQRModal, setShowQRModal, theme }) => {
    return (
        <Modal
            visible={showQRModal}
            onDismiss={() => setShowQRModal(0)}
            // contentContainerStyle={containerStyle}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: Dimensions.get('window').height * 0.3,
                    borderRadius: 20,
                    margin: 10,
                    padding: 10,
                }}
            >
                <Text style={theme.text.h2}>MY CARD</Text>
                <Text style={{ ...theme.text.h4, color: theme.colors.primaryGreen }}>Tom</Text>
                <QRCode size={150} value="8245-9810-4619" />
                <Text style={{ ...theme.text.h4 }}>8245-9810-4619</Text>
            </View>
        </Modal>
    );
};

export default QRModal;
