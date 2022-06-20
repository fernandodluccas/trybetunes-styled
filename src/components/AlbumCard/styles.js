import styled from 'styled-components';

export const Container = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 1rem;

  cursor: pointer;

  div {
    margin-top: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  p {
    color: #3f3d56;
    margin-left: 2px;

    &.collectionName {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.collectionName};
      white-space: nowrap;
      overflow: hidden;
    }
    &.artistName {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.artistName};
    }
    &:hover {
      text-decoration: underline;
    }
  }

`;

export const Image = styled.div`
  width: 210px;
  height: 210px;
  background: url(${({ artworkUrl100 }) => artworkUrl100});
  background-size: cover;
  border-radius: 6px;
`;
