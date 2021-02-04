import React, { useState, useEffect } from 'react';
import { ModalProps, FlatList } from 'react-native';
import api from '../../../services/api';

import Button from '../../Button';
import BottomSheetModal from '../../BottomSheetModal';

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
  image: string;
}

interface RoomSelectBottomSheetProps extends ModalProps {
  visible: boolean;
  onClose(): void;
  onApply(selectedRoomNumber: number | null): void;
  selectedRoom: number;
}

const RoomSelectBottomSheet: React.FC<RoomSelectBottomSheetProps> = ({
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
    <Card
      isSelected={item.room_number === selectRoom}
      onPress={() => handleOnPressCard(item)}
    >
      <CardImage
        source={{
          uri: `http://localhost:3333/files/${item.image}`,
        }}
      />
      <CardInfo>
        <CardText isSelected={item.room_number === selectRoom}>
          {`Número do quarto: ${item.room_number}`}
        </CardText>
        <CardText isSelected={item.room_number === selectRoom}>
          {`Quarto VIP: ${parseVipRoomStatus(item.vip)}`}
        </CardText>
      </CardInfo>
    </Card>
  );

  return (
    <BottomSheetModal isVisible={visible}>
      <ModalContainer>
        <FlatList
          data={rooms}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
        {renderButtoms()}
      </ModalContainer>
    </BottomSheetModal>
  );
};

export default RoomSelectBottomSheet;
