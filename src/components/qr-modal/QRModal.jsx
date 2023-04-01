import { View, Text } from "react-native";
import React from "react";
import qrCode from "../../../assets/qr_code.png";
import { Modal } from "react-native-paper";
const QRModal = () => {
  return (
    <Modal
      visible={showQRModal}
      onDismiss={setShowQRModal(0)}
      // contentContainerStyle={containerStyle}
    >
      <View>
        <Text>QR CODE</Text>
        <Image source={qrCode} />
      </View>
    </Modal>
  );
};

export default QRModal;
