import React from 'react';
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';

interface BottomSheetModalProps {
  isVisible: boolean;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  isVisible,
  children,
}) => (
  <Modal
    isVisible={isVisible}
    deviceHeight={Dimensions.get('window').height}
    deviceWidth={Dimensions.get('window').width}
    style={{ margin: 0 }}
    useNativeDriver
    avoidKeyboard
  >
    {children}
  </Modal>
);

export default BottomSheetModal;
