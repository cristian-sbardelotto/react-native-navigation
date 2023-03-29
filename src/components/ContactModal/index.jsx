import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { CloseButton, CloseButtonText, ModalContainer, ModalGroup } from './styles';

export const ContactModal = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => setModalVisibility(!modalVisibility)}
      >
        <ModalContainer>
          <ModalGroup>
            <Text>Hello World!</Text>

            <CloseButton onPress={() => setModalVisibility(false)}>
              <CloseButtonText>Hide Modal</CloseButtonText>
            </CloseButton>
          </ModalGroup>
        </ModalContainer>

      </Modal>
      <Pressable onPress={() => setModalVisibility(true)}>
        <Text>Click anywhere to show contact info</Text>
      </Pressable>
    </View>
  );
};
