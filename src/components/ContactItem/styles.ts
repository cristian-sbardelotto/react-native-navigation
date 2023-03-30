import styled from 'styled-components/native';

export const ContactContainer = styled.View`
  padding: 0.8rem;
  margin-bottom: 1.4rem;

  background: #ddd;
  border-radius: 10px;
`;

export const ContactGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled.Text`
  font-weight: 700;
  font-size: 1.4rem;
`;
