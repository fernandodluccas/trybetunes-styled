import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 890px;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  .artwork {
    display: none;
  }
  .albumArtwork {
    width: 300px;
    height: 300px;
    border-radius: 1.25rem;
  }
  .artistName {
    font-size: 2rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.artistName};
  }
  .collectionName {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.collectionName};

  }
`;

export const Playlist = styled.div`
width: 100%;
  p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;
