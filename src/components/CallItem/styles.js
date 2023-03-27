import styled from "styled-components/native"

export const CallContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding:  .75rem 1rem;

  background: #ddd;

  border-radius: 10px;
`;

export const CallGroup = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const CallName = styled.Text`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const CallDate = styled.Text`
  font-size: 1.1rem;
`;
