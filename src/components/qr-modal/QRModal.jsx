import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Modal, Button } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';
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
                    height: Dimensions.get('window').height * 0.5,
                    borderRadius: 20,
                    margin: 10,
                    padding: 10,
                }}
            >
                <Text style={theme.text.h1}>Scan your QR Code </Text>
                <Text style={{ ...theme.text.h4, color: theme.colors.primaryPlatinium, textAlign: 'center', marginBottom: 30 }}>
                    Show your code to the cashier to receive points and redeem active rewards.
                </Text>
                <QRCode size={200} value="8245-9810-4619" />
                <Text style={{ ...theme.text.h4, marginTop: 10 }}>8245-9810-4619</Text>
                <TouchableOpacity
                    onPress={async () => {
                        await Clipboard.setStringAsync('8245-9810-4619');
                    }}
                >
                    <View style={{ marginTop: 20 }}>
                        <Button icon="clipboard" textColor={'#000000'} style={theme.text.h4}>
                            Copy code to clipboard
                        </Button>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default QRModal;
