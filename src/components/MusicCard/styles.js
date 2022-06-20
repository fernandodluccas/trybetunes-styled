import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  padding: 7.5px 0;

  img.artwork {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
  }

  label {
    display: flex;
    justify-content: center;
  }

  p {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.heading};
  }

  audio {
    width: 200px;

    ::-webkit-media-controls-mute-button,
    ::-webkit-media-controls-timeline-container,
    ::-webkit-media-controls-timeline,
    ::-webkit-media-controls-volume-slider-container,
    ::-webkit-media-controls-volume-slider {
      display: none;
    }
  }

  track{
    display: none;
  }
`;

export const Image = styled.img``;
