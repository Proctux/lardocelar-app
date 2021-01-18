import React, { useState, useEffect } from 'react';
import { ModalProps, Dimensions, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import api from '../../services/api';

import Button from '../Button';

import {
  ModalContainer,
  Card,
  CardText,
  ButtomContainer,
  CardInfo,
  CardImage,
} from './style';

interface RoomProps {
  id: string;
  room_number: number;
  busy: boolean;
  vip: boolean;
}

interface BottomSheetProps extends ModalProps {
  scrollable?: boolean;
  onClose(): void;
  onApply(selectedRoomNumber: number | null): void;
  selectedRoom: number;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  onClose,
  onApply,
  selectedRoom: selectedRoomNumber,
}) => {
  const [rooms, setRooms] = useState<RoomProps[]>([]);
  const [selectRoom, setSelectRoom] = useState(selectedRoomNumber || null);

  useEffect(() => {
    async function loadAvailableRooms(): Promise<void> {
      const response = await api.get('rooms/available-rooms');

      setRooms(response.data);
    }

    loadAvailableRooms();
  }, []);

  const handleApply = () => {
    onApply(selectRoom);
    onClose();
  };

  const renderButtoms = () => (
    <ButtomContainer>
      <Button onPress={handleApply}>Aplicar</Button>
      <Button onPress={onClose}>Cancelar</Button>
    </ButtomContainer>
  );

  const handleOnPressCard = roomInfo => {
    setSelectRoom(roomInfo.room_number);
  };

  const parseVipRoomStatus = (status: boolean) => (status ? 'Sim' : 'Não');

  const renderItem = ({ item }) => (
    <Card onPress={() => handleOnPressCard(item)}>
      <CardImage
        source={{
          uri:
            'https://www.diariodaregiao.com.br/_midias/jpg/2019/11/19/sem_titulo-2946461.jpg',
        }}
      />
      <CardInfo>
        <CardText>{`Número do quarto: ${item.room_number}`}</CardText>
        <CardText>{`Quarto VIP: ${parseVipRoomStatus(item.vip)}`}</CardText>
      </CardInfo>
    </Card>
  );

  return (
    <Modal
      isVisible={visible}
      deviceHeight={Dimensions.get('window').height}
      deviceWidth={Dimensions.get('window').width}
      style={{ margin: 0 }}
      useNativeDriver
      avoidKeyboard
    >
      <ModalContainer>
        <FlatList
          data={rooms}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
        {renderButtoms()}
      </ModalContainer>
    </Modal>
  );
};

export default BottomSheet;
