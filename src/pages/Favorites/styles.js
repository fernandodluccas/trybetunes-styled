import styled from 'styled-components';

export const Container = styled.div`
  width: 890px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.heading};
  }

  p {
    color: ${({ theme }) => theme.colors.heading};
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Image = styled.div`
  width: 890px;
  height: 210px;
`;
