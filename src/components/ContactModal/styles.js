import styled from "styled-components/native";

export const ModalContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0006;
`;

export const ModalGroup = styled.View`
  display: grid;
  place-items: center;
  width: 80%;
  height: 50vh;
  
  background-color: #fff;
  border-radius: 15px;

  box-shadow: #0006 0 0 55px;
`;

export const CloseButton = styled.Pressable`
  width: 50%;
  padding: 10px;
  
  border-radius: 20;
  background-color: #2196f3;
`;

export const CloseButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;


`; 
